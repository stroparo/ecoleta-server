import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body;

    const point = {
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    };

    const trx = await knex.transaction();

    const insertedPointIds = await trx('points').insert(point);

    const point_id = insertedPointIds[0];

    const insertedPoint = {
      id: point_id,
      ...point,
    };

    const pointsItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await trx('points_items').insert(pointsItems);

    trx.commit();

    return response.json(insertedPoint);
  }
}

export default PointsController;
