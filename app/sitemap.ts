import { MetadataRoute } from 'next'
import { chartTypesInfo } from '../util/sectionDescription'

const mainPages: MetadataRoute.Sitemap = [{
    url: 'https://dataviz-inspiration.com',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
}]

const graphPages: MetadataRoute.Sitemap = chartTypesInfo.map(c => {
    return (
        {
            url: 'https://dataviz-inspiration.com/' + c.id,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: .8,
        }
    )
})

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...mainPages, ...graphPages
    ]
}
