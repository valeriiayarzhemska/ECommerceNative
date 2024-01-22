import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { InputTemplate } from '../InputTemplate';
import { ButtonTemplate } from '../ButtonTemplate';
import { SelectTemplate } from '../SelectTemplate';

import { styles } from './style';

export const FormTemplate = ({
  initialValues,
  validationSchema,
  handleSubmitForm,
  inputList,
  buttonText,
  isLoadingData,
  statesDropdownRef = false,
  citiesDropdownRef = false,
}) => {
  const stylesShema = styles();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View style={stylesShema.container}>
          <View style={stylesShema.input}>
            {inputList.map(field => {
              return field.isSelect ? (
                <SelectTemplate
                  data={field.data}
                  handleSelect={selectedItem =>
                    field.handleSelect(selectedItem, setFieldValue)
                  }
                  defaultText={field.placeholder}
                  errors={errors}
                  name={field.name}
                  ref={
                    field.name === 'state'
                      ? statesDropdownRef
                      : field.name === 'city'
                      ? citiesDropdownRef
                      : null
                  }
                />
              ) : (
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
                  name={field.name}
                />
              );
            })}
          </View>

          <View style={stylesShema.button}>
            <ButtonTemplate
              text={buttonText}
              handleClick={handleSubmit}
              isLoadingData={isLoadingData}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
