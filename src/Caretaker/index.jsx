import React, {useEffect} from 'react'
import routes from '../routes';
import useReactRouter from 'use-react-router';
import Caretaker from './caretaker';

let unlisten;
const CaretakerComp = ({children}) => {
    const {history, location, match} = useReactRouter();
    const caretaker = new Caretaker();
    useEffect(() => {
        unlisten = history.listen((location, action) => {
            const route = routes.find(route => {
                return route.path === location.pathname;
            });
            caretaker.queries = route.queries;
            const ql = caretaker.queries;
            console.log(ql);
        });
        return () => {
            unlisten();
        }
    }, []);
    return <div>{children}</div>;
};

export default CaretakerComp;