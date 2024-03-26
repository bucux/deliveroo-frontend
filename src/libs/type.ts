

// niveau 0

export type Tdatas = {
  header: Theader,
  meta: Tmeta,
  items: Titem[]
}

// niveau 1

export type Theader = {
  title: string, // sert dans Head2
  image: {
    url: string, // sert dans Head2
  },
  headerTags: {
    lines: Tline[] // sert dans Head2
  }
}

export type Tmeta = {
  restaurant: Trestaurant,
  categories: Tcategorie[], // sert dans Head3
}

// niveau 2

export type Titem = {
  id: string,
  categoryId: string,
  name: string,
  description: string, 
  price: Tprice,
  image: Timage,
}

export type Trestaurant = {
  id: string,
  name: string,
}

export type Tcategorie = {
  id: string,
  name: string
}

// niveau 3

export type Tline = {
  spans: Tspan[]
}

export type Tprice = {
  code: string,
  formatted: string
}

export type Timage = {
  altText: string,
  url: string
}

// niveau 4

export type Tspan = {
  text: string
}

// HORS NIVEAU

export type TsectionData = {
  categorie: Tcategorie,
  items: Titem[]
}