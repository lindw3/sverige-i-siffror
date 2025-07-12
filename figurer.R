# Paket
library(jsonlite)
library(ggplot2)
library(stringr)
library(scales)
library(dplyr)
library(tidyr)
library(DT)
library(png)
library(data.table)
library(magrittr)
library(gridExtra)
library(openxlsx)
library(patchwork)
library(ggthemes)
library(plotly)
library(htmlwidgets)
library(reticulate)
library(ggridges)
library(forecast)
library(GGally)
library(cluster)
library(sf)
library(readxl)
library(forcats)

# Tema för figurer
sis_theme <- theme(plot.background = element_rect(fill = "#e5ad59") ,
                   plot.caption = element_text(hjust = 0) ,
                   panel.background = element_rect(fill = "white"),
                   axis.line.x = element_line(color = "black" , linewidth = 0.75) ,
                   axis.line.y = element_line(color = "black" , linewidth = 0.75) ,
                   plot.title = element_text(color = "white" , size = 16 , family = "sans"),
                   panel.grid.major.y  = element_line(color = "#e5ad59" , linetype = "dotted"),
                   panel.grid.major.x = element_line(NULL),
                   panel.grid.minor = element_line(NULL),
                   legend.background = element_rect(fill = "white"),
                   legend.key = element_rect(fill = "white"),
                   legend.text = element_text(color = "black" , family = "sans") ,
                   legend.title = element_text(color = "black" , family = "sans") , 
                   text = element_text(size=12, face="plain", color = "white" , family = "sans"),
                   axis.title = element_text(color = "white" , family = "sans"),
                   axis.text = element_text(color = "white" , family = "sans"))


# Färger

  # Temafärger
"#5991E5"
"#D7E559"
"#E56759"
"#AD59E5"
"#59E5AD"

  # Partifärger
partifärger_colour <- scale_colour_manual(values = c("Centerpartiet" = "#009933" ,
                                                     "Feministiskt initiativ" = "#CD1B68" ,
                                                     "Kristdemokraterna" = "#000077" ,
                                                     "Liberalerna" = "#006AB3" ,
                                                     "Miljöpartiet" = "#83CF39" ,
                                                     "Moderaterna" = "#52BDEC" ,
                                                     "Piratpartiet" = "#572B85" ,
                                                     "Socialdemokraterna" = "#E8112d" , 
                                                     "Sverigedemokraterna" = "#DDDD00" ,
                                                     "Vänsterpartiet" = "#DA291C" ,
                                                     "Junilistan" = "#ff8c00" ,
                                                     "Övriga partier" = "grey"))

partifärger_fill <- scale_fill_manual(values = c("Centerpartiet" = "#009933" ,
                                                 "Feministiskt initiativ" = "#CD1B68" ,
                                                 "Kristdemokraterna" = "#000077" ,
                                                 "Liberalerna" = "#006AB3" ,
                                                 "Miljöpartiet" = "#83CF39" ,
                                                 "Moderaterna" = "#52BDEC" ,
                                                 "Piratpartiet" = "#572B85" ,
                                                 "Socialdemokraterna" = "#E8112d" , 
                                                 "Sverigedemokraterna" = "#DDDD00" ,
                                                 "Vänsterpartiet" = "#DA291C" ,
                                                 "Junilistan" = "#ff8c00" ,
                                                 "Övriga partier" = "grey"))



   # SCB-DATA

# Partisympatier efter kön och inkomst
partisympati_kön_inkomst <- read_excel("data/partisympati_kön_inkomst.xlsx", 
                                       col_types = c("numeric", "text", "text", 
                                                     "numeric", "numeric", "numeric", 
                                                     "numeric", "numeric", "numeric", 
                                                     "numeric", "numeric", "numeric"))
colnames(partisympati_kön_inkomst) <- c("År" , "Kön" , "Inkomst" , "Moderaterna" , "Centerpartiet" , "Liberalerna" , 
                                        "Kristdemokraterna" , "Miljöpartiet" , "Socialdemokraterna" , "Vänsterpartiet" , 
                                        "Sverigedemokraterna" , "Övriga partier")

# Förtroendevalda efter kön och ålder
förtroendevalda_kommun_ålder <- read_excel("data/förtroendevalda_kommun_ålder.xlsx")
förtroendevalda_kommun_ålder <- förtroendevalda_kommun_ålder %>% 
  pivot_longer(!c(Parti, Kön, Kategori, Mätvariabel) , names_to = "År" , values_to = "Andel")

# Anställning utifrån sektor
anställning_sektor <- read_excel("data/anställning_sektor.xlsx")

# Löner utifrån utbildningsnivå
lön_utbildningsnivå <- read_excel("data/lön_utbildningsnivå.xlsx")





   ### FIGURERNA ###

  # Partisympatier efter inkomst
levels = c("81-100 %" , "61-80 %" ,  "41-60 %" , "21-40 %" , "0-20 %")

df <- partisympati_kön_inkomst %>% 
  filter(År == 2024 ,
         Kön == "Båda") %>%
  pivot_longer(!c(År, Kön, Inkomst) , names_to = "Parti" , values_to = "Andel")

p <- df %>% 
  ggplot(aes(y = Parti, x = Andel, fill = factor(Inkomst , level = levels),
             text = paste(Parti, "\nInkomst: ", Inkomst, "\nAndel: ", Andel, "%"))) +
  geom_col(position = "dodge") +
  xlab("Andel, %") + ylab(NULL) +
  labs(fill = "Inkomstpercentil") +
  sis_theme + 
  scale_fill_manual(values = c("0-20 %" = "#5991E5",
                               "21-40 %" = "#D7E559" ,
                               "41-60 %" = "#E56759",
                               "61-80 %" = "#AD59E5" ,
                               "81-100 %" = "#59E5AD"))

img <- ggplotly(p, tooltip = "text") %>%
  config(displayModeBar = F)

saveWidget(img, "images/partisympatier_inkomst.html")



  # Andel förtroendevalda i kommun efter kön
df <- förtroendevalda_kommun_ålder %>% 
  filter(Kön == "Män",
         Mätvariabel == "Könsfördelning" ,
         Kategori == "Totalt"
  )

p <- df %>% 
  ggplot(aes(x = År , y = Andel/100 , group = Parti , color = Parti,
             text = paste(År, "\nParti: " , Parti, "\nAndel män: " , Andel , "%"))) +
  geom_line(linewidth = 1) +  
  scale_y_continuous(limits = c(0 , 1), 
                     breaks = c(0.5), 
                     labels = scales::percent_format(accuracy = 1)) +
  ylab("Andel, %") + xlab(NULL) +
  theme(axis.text.x = element_text(angle = 70, hjust = 1 , vjust = 1)) + 
  partifärger_colour +
  sis_theme

img <- ggplotly(p, tooltip = "text") %>%
  config(displayModeBar = F)

saveWidget(img, "images/förtroendevalda_kön.html")


  # Anställning utifrån sektor och kön
p <- anställning_sektor %>% 
  filter(Kön != "Totalt" ,
         Sektor != "Samtliga") %>% 
  mutate(Andel = `Antal anställda` / sum(`Antal anställda`)) %>% 
  ggplot(aes(x = Sektor , y = `Antal anställda` , fill = Kön,
             text = paste(Kön, "\nSektor:" , Sektor , "\nAntal: ", comma(`Antal anställda`), 
                          "\nAndel: ", round(Andel, 2) * 100 , "%"))) +
  geom_col(position = "dodge") +
  sis_theme +
  xlab(NULL) +
  theme(axis.text.x = element_text(angle = 70, hjust = 1 , vjust = 1)) + 
  scale_fill_manual(values = c("Kvinnor" = "#E56759",
                               "Män" = "#5991E5")) +
  scale_y_continuous(breaks = scales::pretty_breaks(n = 6), labels = scales::comma)

img <- ggplotly(p, tooltip = "text") %>%
  config(displayModeBar = F)

saveWidget(img, "images/anställning_sektor_kön.html")


  # Genomsnittslön utifrån sektor och kön
p <- lön_utbildningsnivå %>% 
  filter(Sektor != "Samtliga" , Kön != "Totalt" , Utbildning == "Alla") %>% 
  ggplot(aes(x = Sektor , y = Lön, fill = Kön,
             text = paste(Kön, "\nSektor: ", Sektor , "\nGenomsnittslön: ", comma(Lön)))) +
  geom_col(position = "dodge") +
  sis_theme +
  theme(axis.text.x = element_text(angle = 70, hjust = 1 , vjust = 1)) + 
  ylab("Genomsnittslön") + xlab(NULL) +
  scale_fill_manual(values = c("Kvinnor" = "#E56759",
                               "Män" = "#5991E5")) +
  scale_y_continuous(labels = comma)

img <- ggplotly(p, tooltip = "text") %>%
  config(displayModeBar = FALSE)

saveWidget(img, "images/lön_sektor_kön.html")


  # Genomsnittslöner utifrån utbildningsnivå och kön
levels = c("Förgymnasial -9 år" , "Förgymnasial 9+ år" , "Gymnasial -3 år", "Gymnasial 3 år", 
           "Eftergymnasial -3 år", "Eftergymnasial 3+ år", "Forskarutbildning")

p <- lön_utbildningsnivå %>% 
  filter(Sektor == "Samtliga" , Kön != "Totalt" , Utbildning != "Alla") %>% 
  ggplot(aes(x = factor(Utbildning, levels = levels) , y = Lön, fill = Kön,
             text = paste(Kön, "\nUtbildningsnivå: ", Utbildning , "\nGenomsnittslön: ", comma(Lön)))) +
  geom_col(position = "dodge") +
  sis_theme +
  ylab("Genomsnittslön") +
  xlab(NULL) +
  theme(axis.text.x = element_text(angle = 70, hjust = 1 , vjust = 1)) +
  scale_fill_manual(values = c("Kvinnor" = "#E56759",
                               "Män" = "#5991E5")) +
  scale_y_continuous(labels = comma)

img <- ggplotly(p, tooltip = "text") %>%
  config(displayModeBar = FALSE)

saveWidget(img, "images/lön_utbildning_kön.html")







 # Barnafödande i Sverige
df <- read.csv("https://ourworldindata.org/grapher/children-born-per-woman.csv?v=1&csvType=full&useColumnShortNames=true")

df <- df %>% 
  mutate(fertility_rate_hist = round(fertility_rate_hist, 2))

p <- df %>% 
  filter(Entity == "Sweden") %>% 
  ggplot(aes(x = Year, y = fertility_rate_hist  , group = 2,
             text = paste("År:" , Year , 
                          "\nBarn:" , fertility_rate_hist))) +
  geom_line(linewidth = 1 , colour = "#5991E5") +
  sis_theme +
  scale_x_continuous(breaks = c(1891, 1935, max(df$Year))) +
  scale_y_continuous(limits = c(0 , 4.2) , 
                     breaks = 0:4) +
  xlab(NULL) + ylab("Barn per kvinna")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)
  
saveWidget(img, "images/barnafödande_sverige.html")


 # ... jämfört med andra länder

p <- df %>%
  filter(Entity %in% c("Sweden", 
                       "High-income countries",
                       "Low-income countries",
                       "Lower-middle-income countries",
                       "Upper-middle-income countries")) %>%
  mutate(
    Entity = case_when(
      Entity == "Sweden" ~ "Sverige",
      Entity == "High-income countries" ~ "Höginkomstländer",
      Entity == "Low-income countries" ~ "Låginkomstländer",
      Entity == "Lower-middle-income countries" ~ "Undre medelinkomstländer",
      Entity == "Upper-middle-income countries" ~ "Övre medelinkomstländer",
      TRUE ~ Entity
    )
  ) %>% 
  ggplot(aes(x = Year, y = fertility_rate_hist  , 
             group = Entity, colour = Entity,
             text = paste("År:" , Year , 
                          "\nLand/region:" , Entity,
                          "\nBarn:" , fertility_rate_hist))) +
  geom_line(linewidth = 1) +
  scale_colour_manual(name = "Land/region" ,
    values = c(
    "Sverige" = "#5991E5",
    "Låginkomstländer" = "#D7E559",
    "Undre medelinkomstländer" = "#E56759",
    "Övre medelinkomstländer" = "#AD59E5",
    "Höginkomstländer" = "#59E5AD"
  )) +
  sis_theme +
  scale_x_continuous(breaks = c(1891, max(df$Year))) +
  scale_y_continuous(limits = c(0 , 7) , 
                     breaks = 0:7) +
  xlab(NULL) + ylab("Barn per kvinna")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/barnafödande.html")








  # Medelålder för kvinnors första giftermål
df <- read.csv("https://ourworldindata.org/grapher/age-at-marriage-women.csv?v=1&csvType=full&useColumnShortNames=true")
colnames(df) <- c("Land" , "Kod" , "År" , "Medelålder" , "median")

p <- df %>% 
  filter(Land == "Sweden") %>% 
  ggplot(aes(x = År, y = Medelålder  , group = 2,
             text = paste("År:" , År , 
                          "\nGenomsnittsålder:" , Medelålder))) +
  geom_line(linewidth = 1 , colour = "#5991E5") +
  sis_theme +
  scale_x_continuous(breaks = c(min(df$År), max(df$År))) +
  scale_y_continuous(limits = c(0 , max(df$Medelålder) + 1) ,
                     breaks =  seq(0, 35, 5)) +
  xlab(NULL) + ylab("Genomsnittsålder vid giftermål bland kvinnor")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/ålder_giftermål_sverige.html")


  # ... jämfört med andra länder
p <- df %>%
  ggplot(aes(x = År, y = Medelålder, group = Land ,
             alpha = Land == "Sweden",
             linewidth = Land == "Sweden",
             colour = Land == "Sweden",
             text = paste(
               "År:" , År,
               "\nLand:" , Land,
               "\nGenomsnittsålder:" , Medelålder
             )
             )) +
  geom_line() +
  scale_colour_manual(values = c("TRUE" = "#D7E559", "FALSE" = "#5991E5")) +
  scale_alpha_manual(values = c("TRUE" = 1, "FALSE" = 0.25)) +
  scale_linewidth_manual(values = c("TRUE" = 1.35, "FALSE" = 0.5)) +
  sis_theme +
  scale_x_continuous(breaks = c(min(df$År), max(df$År))) +
  scale_y_continuous(limits = c(0, max(df$Medelålder, na.rm = TRUE) + 1),
                     breaks = seq(0, 35, 5)) +
  guides(alpha = "none", linewidth = "none" , colour = "none") +
  xlab(NULL) +
  ylab("Genomsnittsålder vid giftermål bland kvinnor")


img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/ålder_giftermål.html")









  # Livstillfredställelse jämfört med andra länder
df <- read.csv("https://ourworldindata.org/grapher/happiness-cantril-ladder.csv?v=1&csvType=full&useColumnShortNames=true")
colnames(df) <- c("Land" , "Kod" , "År" , "Tillfredsställelse")

p <- df %>%
  ggplot(aes(x = År, y = Tillfredsställelse, group = Land,
             alpha = Land == "Sweden",
             linewidth = Land == "Sweden",
             colour = Land == "Sweden",
             text = paste(
               "År:" , År,
               "\nLand:" , Land,
               "\nLivstillfredsställelse:" , Tillfredsställelse
             ))) +
  geom_line() +
  scale_colour_manual(values = c("TRUE" = "#D7E559", "FALSE" = "#5991E5")) +
  scale_alpha_manual(values = c("TRUE" = 1, "FALSE" = 0.25)) +
  scale_linewidth_manual(values = c("TRUE" = 1.35, "FALSE" = 0.5)) +
  sis_theme +
  scale_x_continuous(breaks = c(min(df$År), max(df$År))) +
  scale_y_continuous(limits = c(0, 10),
                     breaks = seq(0, 10, 2.5)) +
  guides(alpha = "none", linewidth = "none", colour = "none") +
  xlab(NULL) +
  ylab("Livstillfredsställelse, skala 1-10")


img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/satisfaction.html")




  # Koppling mellan livstillfredställelse och GDP
df <- read.csv("https://ourworldindata.org/grapher/gdp-vs-happiness.csv?v=1&csvType=full&useColumnShortNames=true")
colnames(df) <- c("Land" , "Kod" , "År" , "Livstillfredsställelse" , "GDP", "Region")

df <- df %>% 
  filter(År == 2023,
         Region != "")

p <- df %>% 
  ggplot(aes(x = GDP, y = Livstillfredsställelse ,
             text = paste(Land, 
                          "\nLivstillfredsställelse:", round(Livstillfredsställelse,2),
                          "\nGDP: ", round(GDP)))) +
  geom_point(aes(colour = Region)) +
  sis_theme +
  labs(colour = "Region") +
  xlab("GDP per capita") + ylab("Livstillfredsställelse, skala 1-10") +
  scale_color_manual(values = c(
    "Africa" = "#5991E5",
    "Asia" = "#D7E559",
    "Europe" = "#E56759",
    "North America" = "#AD59E5",
    "Oceania" = "#59E5AD",
    "South America" = "#e5ad59"
  )) +
  scale_x_log10(labels = label_number(big.mark = ",")) +
  scale_y_log10(labels = label_number(big.mark = ","))
  

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/gdp_satisfaction.html")







  # Suicid per 100 000
df <- read.csv("https://ourworldindata.org/grapher/suicide-rate-who-mdb.csv?v=1&csvType=full&useColumnShortNames=true")
colnames(df) <- c("Land" , "Kod" , "År" , "Suicid")

p <- df %>% 
  filter(Land == "Sweden") %>% 
  ggplot(aes(x = År, y = Suicid  , group = 2,
             text = paste("År:" , År , 
                          "\nSuicid/100,000:" , round(Suicid, 2)))) +
  geom_line(linewidth = 1 , colour = "#5991E5") +
  sis_theme +
  scale_x_continuous(breaks = c(min(df$År), max(df$År))) +
  scale_y_continuous(limits = c(0 , 20) ,
                     breaks =  seq(0, 20, 5)) +
  xlab(NULL) + ylab("Suicid per 100,000 invånare")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/suicid_sverige.html")


  # ... jämfört med andra länder
p <- df %>%
  ggplot(aes(x = År, y = Suicid, group = Land, 
             alpha = Land == "Sweden" ,
             linewidth = Land == "Sweden" ,
             colour = Land == "Sweden",
             text = paste("År:" , År , 
                          "\nLand:" , Land,
                          "\nSuicid/100,000:" , round(Suicid, 2)))) +
  geom_line() +
  scale_colour_manual(values = c("TRUE" = "#D7E559", "FALSE" = "#5991E5")) +
  scale_alpha_manual(values = c("TRUE" = 1, "FALSE" = 0.25)) +
  scale_linewidth_manual(values = c("TRUE" = 1.35, "FALSE" = 0.5)) +
  sis_theme +
  scale_x_continuous(breaks = c(min(df$År), max(df$År))) +
  scale_y_continuous(limits = c(0, max(df$Suicid, na.rm = TRUE) + 1)) +
  guides(alpha = "none", linewidth = "none", colour = "none") +
  xlab(NULL) +
  ylab("Suicid per 100,000 invånare")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/suicid.html")




  # Singelhushåll som % av totala hushåll
df <- read.csv("https://ourworldindata.org/grapher/one-person-households.csv?v=1&csvType=full&useColumnShortNames=true")
colnames(df) <- c("Land" , "Kod" , "År" , "Andel")

p <- df %>% 
  filter(Land == "Sweden") %>% 
  ggplot(aes(x = År, y = Andel  , group = 2,
             text = paste("År:" , År , 
                          "\nAndel singelhushåll:" , round(Andel, 2)))) +
  geom_line(linewidth = 1 , colour = "#5991E5") +
  sis_theme +
  scale_x_continuous(breaks = c(2004, 2018)) +
  scale_y_continuous(limits = c(0 , 100) ,
                     breaks =  seq(0, 100, 25)) +
  xlab(NULL) + ylab("Andel singelhushåll, %")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/singelhushåll_sverige.html")


# ... jämfört med andra länder
p <- df %>%
  ggplot(aes(x = År, y = Andel, group = Land, 
             alpha = Land == "Sweden" ,
             linewidth = Land == "Sweden" ,
             colour = Land == "Sweden",
             text = paste("År:" , År , 
                          "\nLand:" , Land,
                          "\nSuicid/100,000:" , round(Andel, 2)))) +
  geom_line() +
  scale_colour_manual(values = c("TRUE" = "#D7E559", "FALSE" = "#5991E5")) +
  scale_alpha_manual(values = c("TRUE" = 1, "FALSE" = 0.25)) +
  scale_linewidth_manual(values = c("TRUE" = 1.35, "FALSE" = 0.5)) +
  sis_theme +
  scale_x_continuous(limits = c(1970, 2018),
                     breaks = c(1970, 2018)) +
  scale_y_continuous(limits = c(0 , 100) ,
                     breaks =  seq(0, 100, 25)) +
  guides(alpha = "none", linewidth = "none", colour = "none") +
  xlab(NULL) +
  ylab("Andel singelhushåll, %")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/singelhushåll.html")










  # Topp 5 uppskattade dödsorsaker per 100,000 personer
df <- read_excel("data/dödsorsaker.xlsx")
colnames(df) <- c("Land" , "Anledning" , "År" , "Antal")
df$Antal <- as.numeric(df$Antal)

df %>% 
  filter(Land == "Sweden" ,
         År == 2021) %>% 
  summarize(Antal = sum(Antal))

df <- df %>% 
  filter(Land == "Sweden",
         År == 2021) %>% 
  top_n(5, Antal) %>% 
  arrange(desc(Antal))


p <- df %>% 
  filter(Land == "Sweden") %>% 
  ggplot(aes(x = Antal, y = fct_reorder(Anledning, Antal),
             text = paste("\nUppskattat antal/100,000:" , round(Antal, 2)))) +
  geom_col(fill = "#5991E5") +
  sis_theme +
  scale_x_continuous(limits = c(0 , 110) ,
                     breaks =  seq(0, 100, 25)) +
  xlab("Uppskattat antal dödsfall per 100,000 personer") + ylab(NULL)

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/dödsorsaker_sverige.html")


# ... jämfört med topp 5 i Low SDI-länder
df <- read_excel("data/dödsorsaker.xlsx")
colnames(df) <- c("Land" , "Anledning" , "År" , "Antal")
df$Antal <- as.numeric(df$Antal)


anledningar <- df %>%  # Hämta ut topp 5 anledningar i Low SDI
  filter(Land == "Low SDI", År == 2021) %>%
  slice_max(order_by = Antal, n = 5) %>%
  pull(Anledning)

df <- df %>%  # Hämta ut värdena för Sweden och Low SDI utifrån dessa anledningar
  filter(Land %in% c("Sweden", "Low SDI"),
         År == 2021,
         Anledning %in% anledningar) %>%
  arrange(desc(Antal))

levels_y <- c("Enteric infections",
              "Neoplasms",
              "Chronic respiratory diseases",
              "Cardiovascular diseases",
              "Respiratory infections and tuberculosis")

levels_fill <- c("Sweden", "Low SDI")

p <- df %>%
  ggplot(aes(
    x = Antal,
    y = factor(Anledning, levels = levels_y),
    group = factor(Land, levels = levels_fill),
    fill = factor(Land, levels = levels_fill),
    text = paste(
      "\nKategori:" , Land,
      "\nUppskattat antal/100,000:" , round(Antal, 2)
    )
  )) +
  geom_col(position = "dodge") +
  scale_fill_manual(values = c(
    "Sweden" = "#5991E5",
    "Low SDI" = "#E56759"
  )) +
  sis_theme +
  scale_x_continuous(limits = c(0 , 400),
                     breaks = seq(0, 400, 50)) +
  labs(fill = "Kategori") +
  xlab("Uppskattat antal dödsfall per 100,000 personer") +
  ylab(NULL)


img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/dödsorsaker_sverige_lowsdi.html")













  # GDP per capita, lång trend (Maddison project)
df <- read.csv("https://ourworldindata.org/grapher/gdp-per-capita-maddison-project-database.csv?v=1&csvType=full&useColumnShortNames=true")
colnames(df) <- c("Land" , "Kod" , "År" , "GDP", "Annotering")

p <- df %>% 
  filter(Land == "Sweden") %>% 
  ggplot(aes(x = År, y = GDP  , group = 2,
             text = paste("År:" , År , 
                          "\nGDP per capita:" , round(GDP)))) +
  geom_line(linewidth = 1 , colour = "#5991E5") +
  sis_theme +
  scale_x_continuous(breaks = c(1300, 1870, 2022)) +
  scale_y_continuous(limits = c(0 , 50000) ,
                     breaks =  seq(0, 50000, 10000)) +
  xlab(NULL) + ylab("GDP per capita")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/gdp_sverige.html")


# ... jämfört med andra länder
p <- df %>%
  ggplot(aes(x = År, y = GDP, group = Land, 
             alpha = Land == "Sweden" ,
             linewidth = Land == "Sweden" ,
             colour = Land == "Sweden",
             text = paste("År:" , År , 
                          "\nLand:" , Land,
                          "\nGDP per capita:" , round(GDP)))) +
  geom_line() +
  scale_colour_manual(values = c("TRUE" = "#D7E559", "FALSE" = "#5991E5")) +
  scale_alpha_manual(values = c("TRUE" = 1, "FALSE" = 0.25)) +
  scale_linewidth_manual(values = c("TRUE" = 1.35, "FALSE" = 0.5)) +
  sis_theme +
  scale_x_continuous(limits = c(1950, 2022),
    breaks = c(1950, 2022)) +
  scale_y_continuous(limits = c(0 , 175000) ,
                     breaks =  seq(0, 175000, 25000)) +
  guides(alpha = "none", linewidth = "none", colour = "none") +
  xlab(NULL) +
  ylab("GDP per capita")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/gdp.html")









  # Gini-koefficient (mått på inkomstskillnader)
df <- read_excel("data/gini.xlsx")
colnames(df) <- c("Land" , "År" , "Gini")
df$Gini <- as.numeric(df$Gini)
df <- df %>% 
  drop_na(Gini)

p <- df %>% 
  filter(Land == "Sweden") %>% 
  ggplot(aes(x = År, y = Gini  , group = 2,
             text = paste("År:" , År , 
                          "\nGini-koefficient:" , round(Gini, 3)))) +
  geom_line(linewidth = 1 , colour = "#5991E5") +
  sis_theme +
  scale_x_continuous(breaks = c(1975, 2021)) +
  scale_y_continuous(limits = c(0 , 0.5) ,
                     breaks =  seq(0, 0.5, 0.1)) +
  xlab(NULL) + ylab("Gini-koefficient")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/gini_sverige.html")


# ... jämfört med andra länder
p <- df %>%
  ggplot(aes(x = År, y = Gini, group = Land, 
             alpha = Land == "Sweden" ,
             linewidth = Land == "Sweden" ,
             colour = Land == "Sweden",
             text = paste("År:" , År , 
                          "\nLand:" , Land,
                          "\nGini-koefficient:" , round(Gini, 3)))) +
  geom_line() +
  scale_colour_manual(values = c("TRUE" = "#D7E559", "FALSE" = "#5991E5")) +
  scale_alpha_manual(values = c("TRUE" = 1, "FALSE" = 0.25)) +
  scale_linewidth_manual(values = c("TRUE" = 1.35, "FALSE" = 0.5)) +
  sis_theme +
  scale_x_continuous(limits = c(min(df$År), max(df$År)),
                     breaks = c(min(df$År), max(df$År))) +
  scale_y_continuous(limits = c(0 , 0.75) ,
                     breaks =  seq(0, 0.75, 0.10)) +
  guides(alpha = "none", linewidth = "none", colour = "none") +
  xlab(NULL) +
  ylab("Gini-koefficient")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/gini.html")












# Statliga utgifter som % av GDP
df <- read_excel("data/statligautgifter.xlsx")
colnames(df) <- c("Land" , "År" , "Andel")
df$Andel <- as.numeric(df$Andel)

p <- df %>% 
  filter(Land == "Sweden") %>% 
  ggplot(aes(x = År, y = Andel  , group = 2,
             text = paste("År:" , År , 
                          "\nAndel av GDP, %:" , round(Andel, 2)))) +
  geom_line(linewidth = 1 , colour = "#5991E5") +
  sis_theme +
  scale_x_continuous(breaks = c(min(df$År), max(df$År))) +
  scale_y_continuous(limits = c(0 , 70) ,
                     breaks =  seq(0, 70, 10)) +
  xlab(NULL) + ylab("Andel av GDP, %")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/statligautgifter_sverige.html")


# ... jämfört med andra länder
p <- df %>%
  ggplot(aes(x = År, y = Andel, group = Land, 
             alpha = Land == "Sweden" ,
             linewidth = Land == "Sweden" ,
             colour = Land == "Sweden",
             text = paste("År:" , År , 
                          "\nLand:" , Land,
                          "\nAndel av GDP, %:" , round(Andel, 2)))) +
  geom_line() +
  scale_colour_manual(values = c("TRUE" = "#D7E559", "FALSE" = "#5991E5")) +
  scale_alpha_manual(values = c("TRUE" = 1, "FALSE" = 0.25)) +
  scale_linewidth_manual(values = c("TRUE" = 1.35, "FALSE" = 0.5)) +
  sis_theme +
  scale_x_continuous(breaks = c(min(df$År), max(df$År))) +
  scale_y_continuous(limits = c(0 , 70) ,
                     breaks =  seq(0, 70, 10)) +
  guides(alpha = "none", linewidth = "none" ,colour = "none") +
  xlab(NULL) +
  ylab("Andel av GDP, %")

img <- ggplotly(p, tooltip = "text") %>% 
  config(displayModeBar = F)

saveWidget(img, "images/statligautgifter.html")







  # Statliga utgifter per kostnadspost
df <- read.csv("https://ourworldindata.org/grapher/government-spending-by-function.csv?v=1&csvType=full&useColumnShortNames=true")
colnames(df) <- c("Land" , "Kod" , "År" , "Social protection" , 
                  "Health" , "General public services" , 
                  "Education" , "Economic affairs" , 
                  "Defense" , "Order and safety" , 
                  "Housing and community amenities",
                  "Recreation, culture and religion" , 
                  "Environmental protection")










  # Skatter som andel av statens inkomster (kolla bara Sverige)
df <- read.csv("https://ourworldindata.org/grapher/tax-revenue-national-income-longrun.csv?v=1&csvType=full&useColumnShortNames=true")


  # Skatteintäkter som andel av GDP (jämfört med andra länder)
df <- read.csv("https://ourworldindata.org/grapher/tax-revenues-as-a-share-of-gdp-unu-wider.csv?v=1&csvType=full&useColumnShortNames=true")










  # Ojusterat lönegap mellan män och kvinnor
df <- read.csv("https://ourworldindata.org/grapher/gender-wage-gap-oecd.csv?v=1&csvType=full&useColumnShortNames=true")


  # ... jämfört med andra länder











  # Andel kvinnor i chefspositioner
df <- read.csv("https://ourworldindata.org/grapher/proportion-of-women-in-senior-and-middle-management-positions.csv?v=1&csvType=full&useColumnShortNames=true")


  # ... jämfört med andra länder










  # Medelvärde i arbetade timmar/år
df <- read.csv("https://ourworldindata.org/grapher/annual-working-hours-per-worker.csv?v=1&csvType=full&useColumnShortNames=true")


  # ... jämfört med andra länder
df <- read.csv("https://ourworldindata.org/grapher/annual-working-hours-per-person-employed.csv?v=1&csvType=full&useColumnShortNames=true")










  # Resultat i PISA
df <- read_excel("data/pisa_data.xlsx")


  # ... jämfört med andra länder









  # Andel av nationalinkomst på bistånd (FN:s mål är 0.7%)
df <- read.csv("https://ourworldindata.org/grapher/foreign-aid-given-as-a-share-of-national-income.csv?v=1&csvType=full&useColumnShortNames=true")


  # ... jämfört med andra länder






  # Årliga CO2-utsläpp
df <- read.csv("https://ourworldindata.org/grapher/annual-co2-emissions-per-country.csv?v=1&csvType=full&useColumnShortNames=true")


  # ... jämfört med andra länder






  # CO2-utsläpp per capita
df <- read_excel("data/co2_percapita.xlsx")








  # Energimix (fossilt, kärnkraft och förnybart)
df <- read.csv("https://ourworldindata.org/grapher/per-capita-energy-source-stacked.csv?v=1&csvType=full&useColumnShortNames=true")


  # ... jämfört med andra länder





