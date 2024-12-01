import CardMini from "@/src/components/cards/CardMini";



export default async function TvPage() {
    
    return(
        <div className="max-w-7xl mx-auto">
        <section className="my-20">
          <h3 className="text-2xl mb-4 px-5 font-semibold">Сериалы</h3>
          <CardMini type="SERIES" initialPage={1} limit={20}/>
        </section>
    </div>
    )
}
