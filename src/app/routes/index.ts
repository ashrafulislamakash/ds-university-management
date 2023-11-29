import { Router } from 'express';

import { StudentRoutes } from '../../modules/student/student.route';
import { UserRoutes } from '../../modules/users/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach((route) => route.use(route.path, route.route));
export default router;