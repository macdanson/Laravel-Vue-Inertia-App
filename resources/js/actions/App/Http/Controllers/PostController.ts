import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:15
 * @route '/posts'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/posts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:15
 * @route '/posts'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:15
 * @route '/posts'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:15
 * @route '/posts'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PostController::create
 * @see app/Http/Controllers/PostController.php:30
 * @route '/posts/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/posts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::create
 * @see app/Http/Controllers/PostController.php:30
 * @route '/posts/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::create
 * @see app/Http/Controllers/PostController.php:30
 * @route '/posts/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PostController::create
 * @see app/Http/Controllers/PostController.php:30
 * @route '/posts/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PostController::store
 * @see app/Http/Controllers/PostController.php:38
 * @route '/posts'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/posts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PostController::store
 * @see app/Http/Controllers/PostController.php:38
 * @route '/posts'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::store
 * @see app/Http/Controllers/PostController.php:38
 * @route '/posts'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PostController::show
 * @see app/Http/Controllers/PostController.php:46
 * @route '/posts/{post}'
 */
export const show = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/posts/{post}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::show
 * @see app/Http/Controllers/PostController.php:46
 * @route '/posts/{post}'
 */
show.url = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return show.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::show
 * @see app/Http/Controllers/PostController.php:46
 * @route '/posts/{post}'
 */
show.get = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PostController::show
 * @see app/Http/Controllers/PostController.php:46
 * @route '/posts/{post}'
 */
show.head = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:54
 * @route '/posts/{post}/edit'
 */
export const edit = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/posts/{post}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:54
 * @route '/posts/{post}/edit'
 */
edit.url = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return edit.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:54
 * @route '/posts/{post}/edit'
 */
edit.get = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:54
 * @route '/posts/{post}/edit'
 */
edit.head = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:62
 * @route '/posts/{post}'
 */
export const update = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/posts/{post}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:62
 * @route '/posts/{post}'
 */
update.url = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return update.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:62
 * @route '/posts/{post}'
 */
update.put = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:62
 * @route '/posts/{post}'
 */
update.patch = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:70
 * @route '/posts/{post}'
 */
export const destroy = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/posts/{post}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:70
 * @route '/posts/{post}'
 */
destroy.url = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return destroy.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:70
 * @route '/posts/{post}'
 */
destroy.delete = (args: { post: number | { id: number } } | [post: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PostController::deleteComment
 * @see app/Http/Controllers/PostController.php:75
 * @route '/comments/{comment}'
 */
export const deleteComment = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteComment.url(args, options),
    method: 'delete',
})

deleteComment.definition = {
    methods: ["delete"],
    url: '/comments/{comment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PostController::deleteComment
 * @see app/Http/Controllers/PostController.php:75
 * @route '/comments/{comment}'
 */
deleteComment.url = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { comment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { comment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    comment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        comment: typeof args.comment === 'object'
                ? args.comment.id
                : args.comment,
                }

    return deleteComment.definition.url
            .replace('{comment}', parsedArgs.comment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::deleteComment
 * @see app/Http/Controllers/PostController.php:75
 * @route '/comments/{comment}'
 */
deleteComment.delete = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteComment.url(args, options),
    method: 'delete',
})
const PostController = { index, create, store, show, edit, update, destroy, deleteComment }

export default PostController