import React, {useState, useEffect} from 'react';
import axios from "axios";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';

function Category() {

    const [categories, setCategories] = useState({});

    const updateCategories = (categoryList) => {
        const categoryMap = {};

        categoryList.map(category => (
            categoryMap[category._id] = category
        ));

        setCategories(categoryMap);

        // console.log(categoryMap);
    }

    useEffect(() => {

        console.log("mounted");

        axios.get("http://localhost:5000/categories")
            .then(res => {
                console.log("categories");
                console.log(res.data);
                if (res.data && res.data.length > 0) {
                    updateCategories(res.data);
                }
            })
            .catch(err => console.log(err));


    }, []);


    return (
        <div>
            {Object.keys(categories).map(categoryKey => (
                <Accordion key={categoryKey}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{categories[categoryKey].name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Grid container rowSpacing={4} >
                            <Grid md={8}>
                                <TextField
                                    disabled
                                    label="Name"
                                    defaultValue={categories[categoryKey].name}
                                    InputLabelProps={{
                                        style: { color: '#000000' },
                                    }}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "#000000",
                                        },
                                        width: '800px'
                                    }}
                                />
                            </Grid>
                            <Grid md={8}>
                                <TextField
                                    disabled
                                    label="Description"
                                    defaultValue={categories[categoryKey].description}
                                    InputLabelProps={{
                                        style: { color: '#000000' },
                                    }}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "#000000",
                                        },
                                        width: '800px'
                                    }}
                                />
                            </Grid>
                            <Grid xs={8}>
                                <TextField
                                    disabled
                                    label="Parent Category"
                                    defaultValue={categories[categoryKey].parentCategory}
                                    InputLabelProps={{
                                        style: { color: '#000000' },
                                    }}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "#000000",
                                        },
                                        width: '800px'
                                    }}
                                />
                            </Grid>
                            <Grid xs={8}>
                                <TextField
                                    label="Subs"
                                    defaultValue={categories[categoryKey].subCategories}
                                    InputLabelProps={{
                                        style: { color: '#000000' },
                                    }}
                                    sx={{
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "#000000",
                                        },
                                        width: '800px'
                                    }}
                                />
                            </Grid>
                        </Grid>

                    </AccordionDetails>
                </Accordion>
                ))}
        </div>
    );
}

export default Category;
