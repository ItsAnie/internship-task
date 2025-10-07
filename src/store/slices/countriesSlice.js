import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
    "countries/fetchCountries",
    async () => {
        const res = await fetch(
            "https://restcountries.com/v3.1/all?fields=name,flags,continents,cca3"
        );

        if(!res.ok) throw new Error (`HTTP error! status: ${res.status}`);
        const countries = await res.json();

        const continentsMap = {};
        countries.forEach((country) => {
            const continent = country.continents?.[0] || "Unknown";
            if(!continentsMap[continent]) continentsMap[continent] = [];
            continentsMap[continent].push(country);
        });

        const sortedData = Object.keys(continentsMap)
        .sort()
        .reduce((acc, key) => {
            acc[key] = continentsMap[key].sort((a,b) => a.name.common.localeCompare(b.name.common));
            return acc;
        }, {});
        return sortedData;
    }
);

const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        data: {},
        loading: false,
        selectedContinent: null,
        error: null,
    },
    reducers: {
        setSelectedContinent: (state, action) => {
            state.selectedContinent = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.data = action.payload;
                state.selectedContinent = Object.keys(action.payload)[0];
                state.loading = false;
            })
            .addCase(fetchCountries.rejected, (state) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const {setSelectedContinent} = countriesSlice.actions;
export default countriesSlice.reducer;
