import { Container, Grid, Typography } from "@mui/material";
import ContactSocials from "../../app/layout/contactSocials";

function ContactPage() {
  return (
    <Container sx={{ minHeight: "90vh" }}>
      <Typography gutterBottom variant={"h6"}>
        اگر سوال، پیشنهاد، انتقاد یا نظری در مورد محصولات و خدمات ما دارید، می
        توانید از طریق راه های زیر با ما در تماس باشید:
      </Typography>

      <Typography gutterBottom variant={"h6"}>
        ما از شنیدن نظرات شما خوشحال می شویم و در اسرع وقت به پیام های شما پاسخ
        خواهیم داد. بلاش گالری همیشه در کنار شماست.
      </Typography>
      <ContactSocials />
      <Grid container justifyContent="center" mt={5}>
        <img
          src="/android-chrome-192x192.png"
          alt="Blush Gallery"
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />
      </Grid>
    </Container>
  );
}

export default ContactPage;
