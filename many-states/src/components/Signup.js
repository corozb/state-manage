import {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'

export const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [registered, setRegistered] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        newUser({username, email, password}) 
            .then(() => {
                setLoading(false)
                setError('')
                setRegistered(true)
            })
            .catch((error) => {
                setLoading(false)
                setError(error)
            })
    }

    if (registered) return <Redirect to='/dashboard' />
    if (loading) return '...loading'

    return (
        <>
            <Link to='/'>Back</Link>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input 
                    type='text'
                    placeholder='username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input 
                    type='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
