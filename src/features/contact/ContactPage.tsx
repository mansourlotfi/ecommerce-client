import { Container, Typography } from "@mui/material";

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
    </Container>
  );
}

export default ContactPage;
