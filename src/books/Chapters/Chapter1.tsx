
const Dialog = (props) => <p className="text-slate-800 font-medium italic">{props.children}</p>

const Content = (props) => <div className="space-y-6 text-slate-700 leading-relaxed">{props.children}</div>

const Paragraph = (props) => <p className="text-lg">{props.children}</p>

const Wrapper = (props) => (
    <div className="w-[80%] min-w-[400px] mx-auto px-6 py-8 prose prose-lg prose-slate">
        {props.children}
    </div>
);

const Title = (props) => <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center border-b-2 border-slate-200 pb-4">{props.children}</h1>

const Space = (props: { number?: number }) => <div className={`h-${props.number ?? 1 * 2}`} />

export default function Chapter1() {
    return (
        <Wrapper>
            <Title>
                Rozdział 1: Bla bla naszyjnik
            </Title>

            <Content>
                <Paragraph>
                    Pewnego zimowego ranka, w wiosce, mała dziewczynka zapytała mamę:
                </Paragraph>


                <Dialog>
                    - Mamoo... Gdzie jest zaspa?
                </Dialog>


                <Paragraph>
                    Zaspa to mały lisek. A ta dziewczynka to Jué. Jué ma 10 lat. Jej tata umarł... na wonie 6 lat temu. Ale Jué tego nie pamięta.
                </Paragraph>

                <Paragraph>
                    Mama zamyśliła się i odpowiedziała:
                </Paragraph>

                <Dialog>
                    - Nie wiem, moze jest w lesie, albo nad wodą.
                </Dialog>
                <Dialog>
                    - Dobrze. A mogę jej poszukać? - zapytała Jué.
                </Dialog>
                <Dialog>
                    - Tak - odpowiedziała mama i wzieła się za czytanie włosów. A Jué poszła poszukać Zaspy.
                </Dialog>

                <Paragraph>
                    Najpierw poszła nad wodę, ale zaspy tam nie było. A potem poszła do lasu i ją zobaczyła. Siedziała na drzewie i patrzyła na śnieg zsuwający się powoli.
                </Paragraph>

                <Paragraph>
                    Zaspa była cała biała, jak sięgające do pasa, rozpuszczone i lekko falujące włosy Jué. Zaspa machała leniwie swoim bielutkim ogonkiem. Gdy Jué się rozejrzała, zobaczyła, ze śnieg pięknie błyszczy i w tym samym momencie ujrzała coś jeszcze. Coś bardziej błyszczącego niz śnieg. To był... Szafir? Mały kamień. Gdy do niego podeszła, zobaczyła, ze to pierścionek, a mały kamyczke to zawieszka.
                </Paragraph>

                <Dialog>
                    - Jaki on jest ładny. - powiedziała Jué. I podniosła wisiorek ze śniegu, a potem zawiesiła go na szyi.
                </Dialog>

                <Paragraph>
                    Usłyszała szum fal, który wydobywał się... z wisiorka?!
                </Paragraph>

            </Content >
        </Wrapper >
    )
}