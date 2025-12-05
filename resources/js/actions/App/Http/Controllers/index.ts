import UserController from './UserController'
import PostController from './PostController'
const Controllers = {
    UserController: Object.assign(UserController, UserController),
PostController: Object.assign(PostController, PostController),
}

export default Controllers