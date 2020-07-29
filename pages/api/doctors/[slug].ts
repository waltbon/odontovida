import * as fetchCMS from '../../../lib/sanity/queries';

export default async (req, res) => {
    const slug = req.query.slug;

    if (!slug) {
        res.status(400);
        return;
    }

    const data = await fetchCMS.fetchDoctor(slug);
    res.status(200);
    res.json(data);
}