export default function ApartmentsFilter() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", alignItems: "center", mt: "30px" }}
    >
      <Grid xs={12} sm={12} md={12} lg={2}>
        <Typography>Search</Typography>
        <Autocomplete
          freeSolo
          options={cities}
          value={searchValue}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ width: "100%" }}
              placeholder="City or Neighborhood"
            />
          )}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3} lg={2}>
        <Typography>Property Type</Typography>
        <Select sx={{ width: "100%" }} displayEmpty>
          <MenuItem disabled>Any</MenuItem>

          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid xs={12} sm={6} md={3} lg={2}>
        <Typography>Rooms</Typography>
        <Select sx={{ width: "100%" }} displayEmpty>
          <MenuItem disabled>Any</MenuItem>

          {rooms.map((room) => (
            <MenuItem key={room} value={room}>
              {room}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid xs={6} sm={3} md={2} lg={1}>
        <Typography>Min Price</Typography>
        <Select sx={{ width: "100%" }} displayEmpty>
          <MenuItem disabled>Any</MenuItem>

          {minPrice.map((price) => (
            <MenuItem key={price} value={price}>
              {price}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid xs={6} sm={3} md={2} lg={1}>
        <Typography>Max Price</Typography>
        <Select sx={{ width: "100%" }} displayEmpty>
          <MenuItem disabled>Any</MenuItem>

          {maxPrice.map((price) => (
            <MenuItem key={price} value={price}>
              {price}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid
        lg={2}
        sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
      >
        <Button
          variant="contained"
          sx={{
            width: "100%",
            background: "rgba(26, 188, 156, 1)",
            color: "#fff",
            "&:hover": { background: "rgba(26, 188, 156, 0.5)" },
            height: "54px",
            mt: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
          }}
          onClick={() => setFilterOpen(!filterOpen)}
        >
          {filterOpen ? "Less Filters" : "More Filters"}
        </Button>
      </Grid>

      <Grid
        lg={2}
        sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
      >
        <Button
          variant="contained"
          sx={{
            width: "100%",
            background: "rgba(26, 188, 156, 1)",
            color: "#fff",
            "&:hover": { background: "rgba(26, 188, 156, 0.5)" },
            height: "54px",
            mt: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
          }}
        >
          Search
        </Button>
      </Grid>

      <Grid
        xs={12}
        sm={6}
        md={2}
        sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" } }}
      >
        <Button
          variant="contained"
          sx={{
            width: "100%",
            background: "rgba(26, 188, 156, 1)",
            color: "#fff",
            "&:hover": { background: "rgba(26, 188, 156, 0.5)" },
            height: "54px",
            mt: { xs: "0px", sm: "20px", md: "20px", lg: "20px" },
          }}
          onClick={() => setFilterOpen(!filterOpen)}
        >
          {filterOpen ? "Less Filters" : "More Filters"}
        </Button>
      </Grid>

      {filterOpen ? (
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={8}
          sx={{ display: "flex", mt: "10px" }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                mb: "10px",
                color: "rgba(26, 188, 156, 1)",
              }}
            >
              Extra Filters
            </Typography>
            <Grid container spacing={3}>
              <Grid xs={6} sm={3} md={3} lg={3} sx={{ display: "flex" }}>
                <CheckBox sx={{ mr: "1rem" }} />
                <Typography>Elevator</Typography>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} sx={{ display: "flex" }}>
                <CheckBox sx={{ mr: "1rem" }} />
                <Typography>Parking</Typography>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} sx={{ display: "flex" }}>
                <CheckBox sx={{ mr: "1rem" }} />
                <Typography>Air Conditioning</Typography>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} sx={{ display: "flex" }}>
                <CheckBox sx={{ mr: "1rem" }} />
                <Typography>Balcony</Typography>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} sx={{ display: "flex" }}>
                <CheckBox sx={{ mr: "1rem" }} />
                <Typography>Accessible</Typography>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} sx={{ display: "flex" }}>
                <CheckBox sx={{ mr: "1rem" }} />
                <Typography>Equipped</Typography>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} sx={{ display: "flex" }}>
                <CheckBox sx={{ mr: "1rem" }} />
                <Typography>Pet Friendly</Typography>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} sx={{ display: "flex" }}>
                <CheckBox sx={{ mr: "1rem" }} />
                <Typography>Storage</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      ) : (
        ""
      )}

      <Grid
        xs={12}
        sm={12}
        md={3}
        sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" } }}
      >
        <Button
          variant="contained"
          sx={{
            width: "100%",
            background: "rgba(26, 188, 156, 1)",
            color: "#fff",
            "&:hover": { background: "rgba(26, 188, 156, 0.5)" },
            height: "54px",
            mt: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
          }}
        >
          Search
        </Button>
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ mt: "10px", display: "flex", alignItems: "center" }}
      >
        <Typography>
          Click search to browse{" "}
          <Typography
            sx={{ fontWeight: "bold", color: "rgba(26, 188, 156, 1)" }}
            component={"span"}
          >
            {apartments.length}
          </Typography>{" "}
          properties
        </Typography>
        <Remove sx={{ margin: "0px 15px 0px 15px" }} />
        <Button sx={{ color: "rgba(26, 188, 156, 1)" }}>Clear Filters</Button>
      </Grid>
    </Grid>
  );
}
