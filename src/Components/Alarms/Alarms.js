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
    list: "",

};



export default function Alarms() {



    const {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        list,

    } = UseForm(initialValues);



    return (


        <Form >
            <Grid container>


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


    )};

