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




   # SCB-data







   ### FIGURERNA ###









 # Barnafödande i Sverige
df <- read.csv("https://ourworldindata.org/grapher/children-born-per-woman.csv?v=1&csvType=full&useColumnShortNames=true")

df <- df %>% 
  mutate(fertility_rate_hist = round(fertility_rate_hist, 2))

df <- df %>% 
  filter(Entity == "Sweden") %>% 
  ggplot(aes(x = Year, y = fertility_rate_hist  , group = 2,
             text = paste("År:" , Year , 
                          "\nBarn:" , fertility_rate_hist))) +
  geom_line(linewidth = 1.2) +
  sis_theme +
  scale_x_continuous(breaks = c(1891, 1935, 2023)) +
  scale_y_continuous(limits = c(0 , 4.2) , 
                     breaks = 0:4) +
  xlab("År") + ylab("Barn per kvinna")

img <- ggplotly(df, tooltip = "text") %>% 
  config(displayModeBar = F)
  
saveWidget(img, "images/barnafödande_sverige.html")


 # Sverige i jämförelse med utvalda länder



