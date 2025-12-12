import ProfileController from './ProfileController'
import UserController from './UserController'
import PostController from './PostController'
import ProductController from './ProductController'
import GuestbookController from './GuestbookController'
import AuthController from './AuthController'
const Controllers = {
    ProfileController: Object.assign(ProfileController, ProfileController),
UserController: Object.assign(UserController, UserController),
PostController: Object.assign(PostController, PostController),
ProductController: Object.assign(ProductController, ProductController),
GuestbookController: Object.assign(GuestbookController, GuestbookController),
AuthController: Object.assign(AuthController, AuthController),
}

export default Controllers