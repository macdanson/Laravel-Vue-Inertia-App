import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\GuestbookController::index
 * @see app/Http/Controllers/GuestbookController.php:14
 * @route '/signatures'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/signatures',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuestbookController::index
 * @see app/Http/Controllers/GuestbookController.php:14
 * @route '/signatures'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestbookController::index
 * @see app/Http/Controllers/GuestbookController.php:14
 * @route '/signatures'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuestbookController::index
 * @see app/Http/Controllers/GuestbookController.php:14
 * @route '/signatures'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GuestbookController::create
 * @see app/Http/Controllers/GuestbookController.php:29
 * @route '/signatures/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/signatures/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuestbookController::create
 * @see app/Http/Controllers/GuestbookController.php:29
 * @route '/signatures/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestbookController::create
 * @see app/Http/Controllers/GuestbookController.php:29
 * @route '/signatures/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuestbookController::create
 * @see app/Http/Controllers/GuestbookController.php:29
 * @route '/signatures/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GuestbookController::store
 * @see app/Http/Controllers/GuestbookController.php:37
 * @route '/signatures'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/signatures',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GuestbookController::store
 * @see app/Http/Controllers/GuestbookController.php:37
 * @route '/signatures'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestbookController::store
 * @see app/Http/Controllers/GuestbookController.php:37
 * @route '/signatures'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GuestbookController::show
 * @see app/Http/Controllers/GuestbookController.php:53
 * @route '/signatures/{signature}'
 */
export const show = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/signatures/{signature}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuestbookController::show
 * @see app/Http/Controllers/GuestbookController.php:53
 * @route '/signatures/{signature}'
 */
show.url = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { signature: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    signature: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        signature: args.signature,
                }

    return show.definition.url
            .replace('{signature}', parsedArgs.signature.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestbookController::show
 * @see app/Http/Controllers/GuestbookController.php:53
 * @route '/signatures/{signature}'
 */
show.get = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuestbookController::show
 * @see app/Http/Controllers/GuestbookController.php:53
 * @route '/signatures/{signature}'
 */
show.head = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GuestbookController::edit
 * @see app/Http/Controllers/GuestbookController.php:61
 * @route '/signatures/{signature}/edit'
 */
export const edit = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/signatures/{signature}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuestbookController::edit
 * @see app/Http/Controllers/GuestbookController.php:61
 * @route '/signatures/{signature}/edit'
 */
edit.url = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { signature: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    signature: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        signature: args.signature,
                }

    return edit.definition.url
            .replace('{signature}', parsedArgs.signature.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestbookController::edit
 * @see app/Http/Controllers/GuestbookController.php:61
 * @route '/signatures/{signature}/edit'
 */
edit.get = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuestbookController::edit
 * @see app/Http/Controllers/GuestbookController.php:61
 * @route '/signatures/{signature}/edit'
 */
edit.head = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GuestbookController::update
 * @see app/Http/Controllers/GuestbookController.php:69
 * @route '/signatures/{signature}'
 */
export const update = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/signatures/{signature}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\GuestbookController::update
 * @see app/Http/Controllers/GuestbookController.php:69
 * @route '/signatures/{signature}'
 */
update.url = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { signature: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    signature: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        signature: args.signature,
                }

    return update.definition.url
            .replace('{signature}', parsedArgs.signature.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestbookController::update
 * @see app/Http/Controllers/GuestbookController.php:69
 * @route '/signatures/{signature}'
 */
update.put = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\GuestbookController::update
 * @see app/Http/Controllers/GuestbookController.php:69
 * @route '/signatures/{signature}'
 */
update.patch = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\GuestbookController::destroy
 * @see app/Http/Controllers/GuestbookController.php:77
 * @route '/signatures/{signature}'
 */
export const destroy = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/signatures/{signature}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GuestbookController::destroy
 * @see app/Http/Controllers/GuestbookController.php:77
 * @route '/signatures/{signature}'
 */
destroy.url = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { signature: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    signature: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        signature: args.signature,
                }

    return destroy.definition.url
            .replace('{signature}', parsedArgs.signature.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestbookController::destroy
 * @see app/Http/Controllers/GuestbookController.php:77
 * @route '/signatures/{signature}'
 */
destroy.delete = (args: { signature: string | number } | [signature: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const signatures = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default signatures