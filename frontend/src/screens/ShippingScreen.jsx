import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../slices/cartSlice';
import FormContainer from '../components/FormContainer';
import { Form, Button } from 'react-bootstrap';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingScreen = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAdress } = cart;
    const [address, setAddress] = useState(shippingAdress?.address || '');
    const [city, setCity] = useState(shippingAdress?.city || '');
    const [postalCode, setPostalCode] = useState(shippingAdress?.postalCode || '');
    const [country, setCountry] = useState(shippingAdress?.country || '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        navigate('/payment');
    }


  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
    <Form onSubmit={submitHandler}>
        <h1>Shipping</h1>
    <Form.Group className='my-2' controlId='address'>
      <Form.Label>Address</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter address'
        value={address}
        required
        onChange={(e) => setAddress(e.target.value)}
      ></Form.Control>
    </Form.Group>

    <Form.Group className='my-2' controlId='city'>
      <Form.Label>City</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter city'
        value={city}
        required
        onChange={(e) => setCity(e.target.value)}
      ></Form.Control>
    </Form.Group>

    <Form.Group className='my-2' controlId='postalCode'>
      <Form.Label>Postal Code</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter postal code'
        value={postalCode}
        required
        onChange={(e) => setPostalCode(e.target.value)}
      ></Form.Control>
    </Form.Group>
    <Form.Group className='my-2' controlId='country'>
      <Form.Label>Country</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter country'
        value={country}
        required
        onChange={(e) => setCountry(e.target.value)}
      ></Form.Control>
    </Form.Group>

    <Button type='submit' variant='primary'>
     Continue
    </Button>
  </Form>
</FormContainer>
  )
}

export default ShippingScreen;