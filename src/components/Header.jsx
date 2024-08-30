import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <h1>shopping Cart</h1>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;