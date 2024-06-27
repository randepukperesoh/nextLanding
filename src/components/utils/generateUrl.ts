
import { client } from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export const generateUrl = (source: string) => {

    return builder.image(source)
}

