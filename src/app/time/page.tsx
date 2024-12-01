"use client";

import { useEffect, useState, useCallback } from "react";
import { getUrqlClient } from "@/src/libs/urql";
import {
  ScheduledContentQuery,
  ScheduledContentQueryVariables,
  ScheduledContentDocument,
} from "@/src/graphql/operations";

const DAYS_IN_WEEK = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const getWeekSchedule = () => {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(today);
    day.setHours(0, 0, 0, 0);
    day.setDate(today.getDate() + i);
    return {
      dayName: DAYS_IN_WEEK[day.getDay()],
      date: day.toLocaleDateString("ru-RU", { day: "numeric", month: "long" }),
      dayStartTimestamp: Math.floor(day.getTime() / 1000),
      dayEndTimestamp: Math.floor(day.getTime() / 1000) + 24 * 60 * 60 - 1,
    };
  });
};

const getScheduledContent = async () => {
  const { client } = getUrqlClient();
  try {
    const result = await client.query<ScheduledContentQuery, ScheduledContentQueryVariables>(
      ScheduledContentDocument,
      { limit: 80, sortByDate: "ASC" }
    );
    return result.data?.getScheduledContent || [];
  } catch (error) {
    console.error("Ошибка при получении данных о расписании:", error);
    return [];
  }
};

export default function Time() {
  const weekSchedule = getWeekSchedule();
  const [scheduledContent, setScheduledContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getScheduledContent();
      setScheduledContent(data);
    } catch (err) {
      setError("Не удалось загрузить расписание. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div className="flex items-center justify-center h-screen">Загрузка...</div>;
  if (error) return <div className="text-red-500 text-center mt-20">{error}</div>;

  const episodesByDay = weekSchedule.map((day) => {
    const episodesForDay = scheduledContent.filter((episode) => {
      let nextEpisodeTimestamp = String(episode?.next_episode);

      if (nextEpisodeTimestamp.length > 10) {
        nextEpisodeTimestamp = nextEpisodeTimestamp.slice(0, 10);
      }

      nextEpisodeTimestamp = Number(nextEpisodeTimestamp);

      if (isNaN(nextEpisodeTimestamp)) return false;

      const episodeDate = new Date(nextEpisodeTimestamp * 1000);
      return (
        episodeDate.getFullYear() === new Date(day.dayStartTimestamp * 1000).getFullYear() &&
        episodeDate.getMonth() === new Date(day.dayStartTimestamp * 1000).getMonth() &&
        episodeDate.getDate() === new Date(day.dayStartTimestamp * 1000).getDate()
      );
    });

    return {
      ...day,
      episodes: episodesForDay,
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h3 className="text-3xl font-bold text-center mb-10 text-black">Расписание сериалов</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {episodesByDay.map((day, index) => (
          <div
            key={day.date}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              {index === 0
                ? `Сегодня — ${day.date}`
                : index === 1
                ? `Завтра — ${day.date}`
                : `${day.dayName} — ${day.date}`}
            </h4>
            {day.episodes.length > 0 ? (
              <ul className="space-y-2">
                {day.episodes.map((episode, idx) => {
                  let nextEpisodeTimestamp = String(episode?.next_episode);
                  if (nextEpisodeTimestamp.length > 10) {
                    nextEpisodeTimestamp = nextEpisodeTimestamp.slice(0, 10);
                  }
                  nextEpisodeTimestamp = Number(nextEpisodeTimestamp);

                  return (
                    <li
                      key={idx}
                      className="flex justify-between items-center text-gray-700"
                    >
                      <span className="font-medium">{episode?.title || "Без названия"}</span>
                      <span className="text-sm">
                        {nextEpisodeTimestamp
                          ? new Date(nextEpisodeTimestamp * 1000).toLocaleTimeString("ru-RU", {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "Europe/Moscow",
                            })
                          : "Дата неизвестна"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-gray-500">Нет запланированных серий</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

