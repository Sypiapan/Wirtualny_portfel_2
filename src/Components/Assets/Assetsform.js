import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";

import Controls from "../../Components/Controls/Controls";


import UseForm from "../../Components/UseForm/UseForm";
import Form from "../../Components/UseForm/Form";

import * as Dictionary from "../../Dictionary/Dictionary";


const assetsItems = [
    {id: "waluta", title: "waluta"},
    {id: "nieruchomości", title: "nieruchomości"},
    {id: "akcje", title: "akcje"},
    {id: "kryptowaluty", title: "kryptowaluty"},
    {id: "metale szlachetne", title: "metale szlachetne"},

]


const initialValues = {

    id: 0,
    asset: "",
    name: "",
    number: "",
    currency: "",
    price: "",
    value: "",
    date: new Date(),


};


export default function Assetsform() {


    const validate = () => {

        let temp = {}
        temp.number = !isNaN(values.number) ? "" : "Wpisane dane nie sa liczbą"
        temp.price = !isNaN(values.price) ? "" : "Wpisane dane nie sa liczbą"
        setErrors({

            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        list,
        setList


    } = UseForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate())
            Dictionary.insertInvestments(values)
    }
    return (


        <Form onSubmit={handleSubmit}>
            <Grid container>

                <Grid item xs={6}>
                    <Controls.Input
                        name={"number"}
                        label={"ilość"}
                        value={values.number}
                        onChange={handleInputChange}
                        error={errors.number}
                    />

                    <Controls.Input

                        label={"cena"}
                        name={"price"}
                        value={values.price}
                        onChange={handleInputChange}
                        error={errors.price}
                    />
                </Grid>
                <Grid item xs={6}>

                    <Controls.RadioGroups
                        name={"asset"}
                        label={"Aktywa"}
                        value={values.asset}
                        onChange={handleInputChange}
                        items={assetsItems}

                    />
                    <Controls.Selects
                        name={"currency"}
                        label={"Waluty"}
                        value={values.currency}
                        onChange={handleInputChange}
                        options={list}

                    />
                    <Controls.DataPicker
                        name={"date"}
                        label={"Data inwestycji"}
                        value={values.date}
                        onChange={handleInputChange}


                    />

                    <div>
                        <Controls.Buttons
                            type={"submit"}
                            variant={"contained"}
                            color={"primary"}
                            size={"large"}
                            text={"Zapisz"}


                        />
                    </div>
                </Grid>


            </Grid>
        </Form>


    )

};