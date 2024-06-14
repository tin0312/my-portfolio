import Box from "@mui/material/Box"

export default function Contact(){
    return (
        <>
            <Box
                className="contact-wrapper"
                id="contact"
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
            >
                <h1>Contact</h1>
            </Box>
        </>
    )
}