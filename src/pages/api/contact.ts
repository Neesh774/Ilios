import { z } from 'zod';
import { api } from '../../utils/api';

const schema = z.object({
    name: z.string(),
    email: z.string(),
    body: z.string(),
});

export default api({
    async POST({ req, res }) {
        const body = schema.parse(req.body);
        const result = await fetch(process.env.DISCORD_WEBHOOK as string, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                embeds: [
                    {
                        description: body.body,
                        author: {
                            name: `${body.name} - ${body.email}`,
                        },
                        color: 16763450,
                        fields: [
                            {
                                name: 'ip',
                                value:
                                    req.headers['x-forwarded-for'] ??
                                    req.socket.remoteAddress ??
                                    'unknown!?',
                            },
                        ],
                    },
                ],
            }),
        });

        if (result.status >= 400) {
            res.throw(result.status, 'Error sending notification');
        }

        if (req.headers['content-type'] === 'application/json') {
            return {
                sent: true,
            };
        }

    },
});