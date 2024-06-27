
import { client } from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

export const generateUrl = (source: string) => {

    return builder.image(source)
}

