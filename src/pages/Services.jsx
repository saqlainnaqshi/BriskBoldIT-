import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, Typography, Box, Card, CardContent } from "@mui/material";
// Importing the required icons
import { faCogs, faThumbsUp, faPrint, faLanguage, faChild, faRobot } from "@fortawesome/free-solid-svg-icons";


export const Services = ({ data }) => {

    const iconMapping = {
        "fa fa-cogs": faCogs,
        "fa fa-thumbs-up": faThumbsUp,
        "fa fa-print": faPrint,
        "fa fa-language": faLanguage,
        "fa fa-robot": faRobot,
        "fa fa-child": faChild,
    };

    return (
        <div id="services" className="py-16 bg-gradient-to-r from-blue-50 via-white to-gray-100" style={{ marginBottom: '50px' }}>
            <Container>
                {/* Section Title */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="h3" className="text-4xl font-bold text-black-800"
                     sx={{ fontWeight: 500 }}
                    >
                        Our Services
                    </Typography>
                    <Typography variant="h5" className="text-lg text-gray-600 mt-4 font-meduim"
                    style={{ background: 'linear-gradient(45deg, #FF6F61, #6B5B95)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        fontWeight: 'bold'}}  >
                        We Build Robots. For a Better Future of Human Force.
                    </Typography>
                </Box>

                {/* Service Cards */}
                <Grid container spacing={4} justifyContent="center">
                    {data
                        ? data.map((service, i) => {

                            const icon = iconMapping[service.icon] || faCogs;

                            return (
                                <Grid item xs={12} sm={6} md={4} key={`${service.name}-${i}`}>
                                    <Card
                                        sx={{
                                            borderRadius: "12px",
                                            boxShadow: 3,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            "&:hover": {
                                                boxShadow: 6,
                                                transform: "scale(1.05)",
                                                transition: "all 0.3s ease",
                                            },
                                        }}
                                    >
                                        <CardContent className="text-center py-6 px-4 flex-grow">
                                            {/* Icon */}
                                            <Box mb={3}>
                                                <FontAwesomeIcon
                                                    icon={icon}
                                                    className="text-indigo-600 "
                                                    style={{ fontSize: "3rem", color: "#0067A3" }}
                                                />
                                            </Box>


                                            <Typography variant="h6" className="text-xl font-medium text-gray-800 mb-2"
                                          style={{ color: "#0067A3" }}  >
                                                {service.name}
                                            </Typography>
                                            <Typography variant="body2" className="text-gray-600"
                                                style={{ fontWeight: "500" }}>
                                                {service.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })
                        : "Loading..."}
                </Grid>
            </Container>
        </div>
    );
};
