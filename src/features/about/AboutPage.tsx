import { Container, Grid, Typography } from "@mui/material";
import ContactSocials from "../../app/layout/contactSocials";

export default function AboutPage() {
  return (
    <Container sx={{ minHeight: "90vh" }}>
      <Typography gutterBottom variant={"h6"}>
        بلاش گالری یک فروشگاه آنلاین متخصص در فروش لوازم آرایشی با کیفیت و قیمت
        مناسب است. ما از برندهای معتبر داخلی و خارجی استفاده می کنیم و به رضایت
        مشتریان خود اهمیت می دهیم. ما همچنین خدمات مشاوره ای در زمینه آرایش و
        بهداشت پوست ارائه می دهیم.
      </Typography>
      <Typography gutterBottom variant={"h6"}>
        بلاش گالری جایی است که شما می توانید به راحتی و با اطمینان خرید کنید و
        زیبایی خود را به اشتراک بگذارید.
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
