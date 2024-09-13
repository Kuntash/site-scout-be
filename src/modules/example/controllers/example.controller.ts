import { NextFunction, Request, Response } from 'express';

class ExampleController {
  public async exampleMethod(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: 'Hello, World!' });
    } catch (error) {
      next(error);
    }
  }
}

export default ExampleController;
