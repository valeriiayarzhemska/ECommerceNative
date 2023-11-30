import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { InputTemplate } from '../InputTemplate';
import { ButtonTemplate } from '../ButtonTemplate';

import { styles } from './style';

export const FormTemplate = ({
  initialValues,
  validationSchema,
  handleSubmitForm,
  inputList,
  buttonText,
}) => {
  const stylesShema = styles();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}>
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={stylesShema.container}>
          <View style={stylesShema.input}>
            {inputList.map(field => {
              console.log(touched[field.name] && errors[field.name]);
              return (
                <InputTemplate
                  key={field.id}
                  icon={field.icon}
                  placeholder={field.placeholder}
                  secureTextEntry={field.secureTextEntry}
                  value={values[field.name]}
                  onChangeText={handleChange(field.name)}
                  error={touched[field.name] && errors[field.name]}
                  errors={errors[field.name]}
                  keyboardType={field.keyboardType}
                />
              );
            })}
          </View>

          <View style={stylesShema.button}>
            <ButtonTemplate text={buttonText} handleClick={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
};
