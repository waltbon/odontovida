import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data,
})

export const fetchQuerySanity = async <T>(query: string, params: any = {}): Promise<T> => {
    return client.fetch(query, params);
}