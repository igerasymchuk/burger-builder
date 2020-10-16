import React, { useState, useEffect } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Auxc'

const withErrorHandler = (WrappedComponent, axios ) => {
    return (props) => {
        const [error, setError] = useState(null);

        // Подібно до componentDidMount та componentDidUpdate:
        useEffect(() => {
            axios.interceptors.request.use(req=> {
                setError(null)
                return req
            })
            axios.interceptors.response.use(res => res, error => {
                setError(error)
            })
        });
        return (
            <Aux>
                <Modal show={error} modalClosed={()=>{setError(null)}}>
                    {error ? error.message : null}                  
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
}

export default withErrorHandler