

export type Tdatas = {
  header: {
    title: string
  },
  items: Titem[]
}

export type Titem = {
  allergyDescription: string,
  avalaible: boolean,
  banner: string,
  categoryId: string,
  description: string, 
  dietaryInformation: string, 
  drnId: string,
  favouritesOverlay: string
}