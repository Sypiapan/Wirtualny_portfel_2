export const getCurriencyCollection = () => ([

    {id: "PLN", title: "PLN"},
    {id: "EUR", title: "EUR"},
    {id: "USD", title: "USD"},
    {id: "CHF", title: "CHF"},
    {id: "GBP", title: "GBP"},
])


export const getSharesCollection = () => ([

    {id: "ASSECOPOL", title: "ASSECOPOL"},
    {id: "ALLEGRO", title: "ALLEGRO"},
    {id: "CCC", title: "CCC"},
    {id: "CDPROJEKT", title: "CDPROJEKT"},
    {id: "CYFRPLSAT", title: "CYFRPLSAT"},
    {id: "KGHM", title: "KGHM"},
    {id: "PKOBP", title: "PKOBP"},

])




export const getRealestateCollection = () => ([

    {id: "mieszkanie", title: "mieszkanie"},
    {id: "dom", title: "dom"},
    {id: "działka", title: "działka"},
    {id: "garaż", title: "garaż"},

])


const KEYS = {

    Investment: "Investment",
    InvestmentId: "InvestmentId",

}

export function insertInvestments(data) {
    let Investment = getAllInvestments();
    data["id"]=generateInvestmentId()
    Investment.push(data)
    localStorage.setItem(KEYS.Investment, JSON.stringify(Investment))
}

export function generateInvestmentId() {
    if (localStorage.getItem(KEYS.InvestmentId) == null)
        localStorage.setItem(KEYS.InvestmentId, '0')
    var id = parseInt(localStorage.getItem(KEYS.InvestmentId))
    localStorage.setItem(KEYS.InvestmentId, (++id).toString())
    return id;
}
export function getAllInvestments() {
    if (localStorage.getItem(KEYS.Investment) == null)
        localStorage.setItem(KEYS.Investment, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.Investment));

}