import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";

export const Header = () => {
    return (
        <header
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("src/assets/briskboldbanner.jpg")',
          marginBottom: '50px',
          paddingBottom: '20px',
          height: 'auto',
          minHeight: '300px', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
        }}
      >
      
          
            <Box className="absolute inset-0 bg-black opacity-50"></Box>

            
            <Container className="relative z-10 flex h-full px-4">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={10}>
                        {/* <Box className="text-center text-white">
                           
                            <Typography
                                variant="h1"
                                component="h1"
                                className="font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl"
                                sx={{
                                    background: "linear-gradient(to right, #ff7e5f, #feb47b, #ff6a00, #d6ff00)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    fontWeight: "bold",
                                    letterSpacing: "0.5rem",
                                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                                }}
                            >
                                BriskBold IT
                            </Typography>

                            
                            <Typography
                                variant="h5"
                                className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
                            >
                                We are an emerging market disrupter with expertise in digital transformation, robotics, and automation, providing innovative solutions to drive your business to the future.
                            </Typography>

                            
                            <Box mt={4}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    href="#services"
                                    sx={{
                                        padding: "10px 30px",
                                        fontSize: "18px",
                                        backgroundColor: "#ff7e5f",
                                        "&:hover": {
                                            backgroundColor: "#feb47b",
                                        },
                                    }}
                                >
                                    Get Started
                                </Button>
                            </Box>
                        </Box> */}
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
};
