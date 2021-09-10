import * as yup from 'yup';

export const customerValidationschema = yup.object().shape({
    fname: yup.string().required('Required'),
    lname: yup.string().required('Required'),
    cname: yup.string().required('Required'),
    wphone: yup.number().required('Required').positive().integer(),
    mphone: yup.number().required('Required').positive().integer(),
    email: yup.string().email('Email is invalid').required('Required'),
    country: yup.string().required('Required'),
    
  });
