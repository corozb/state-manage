import {useReducer} from 'react'
import { Link, Redirect } from 'react-router-dom'

const signupReducer = (state, action) {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                loading: true,
                error: '',
            }

        case 'succes':
            return {
                ...state,
                loading: false,
                error: '',
                registered: true
            }

        case 'error':
            return {
                ...state,
                loading: false,
                error: action.error,
            }

        case 'input':
            return {
                ...state,
                [action.name] : action.value
            }
        
        default:
            return state
    }
}

const initialState = {
    username: '',
    email: '',
    password: '',
    loading: false,
    error: '',
    registered: false
}

export const SignupUseState = () => {
    const [state, dispatch] = useReducer(signupReducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch( { type: 'login'})


        newUser({username, email, password}) 
            .then(() => {
                dispatch( { type: 'success'})
            })
            .catch((error) => {
                dispatch( { type: 'error', error})
             })
    }

    if (state.registered) return <Redirect to='/dashboard' />
    if (state.loading) return '...loading'

    return (
        <>
            <Link to='/'>Back</Link>
            {state.error && <p>{state.error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={state.email}
                />
                <input 
                    type='text'
                    placeholder='username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={state.username}
                />
                <input 
                    type='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={state.password}
                />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
