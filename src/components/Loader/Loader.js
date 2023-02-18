import './Loader.css'
import ReactLoading from 'react-loading';


export const Loader = ({ type, color }) => (
        <ReactLoading type={type} color={color} height={'10%'} width={'10%'}/>
);
