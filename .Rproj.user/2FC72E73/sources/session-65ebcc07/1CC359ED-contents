# Paket
library(flexdashboard)
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
library(ggridges)
library(forecast)
library(GGally)
library(cluster)
library(sf)

# Data - Valresultat Sverige
library(readxl)
valresultat_sverige <- read_excel("data/valresultat_sverige.xlsx", 
                                         col_types = c("text", "numeric", "numeric", 
                                                       "numeric", "numeric", "numeric", 
                                                       "numeric", "numeric", "numeric", 
                                                       "numeric"))

# Temat
ss_theme <- theme(plot.background = element_rect(fill = "#EB6864") ,
                  plot.caption = element_text(hjust = 0) ,
                  panel.background = element_rect(fill = "white"),
                  axis.line.x = element_line(color = "black" , linewidth = 0.75) ,
                  axis.line.y = element_line(color = "black" , linewidth = 0.75) ,
                  plot.title = element_text(color = "white" , size = 16 , family = "sans"),
                  panel.grid.major.y  = element_line(color = "#B51E17" , linetype = "dotted"),
                  panel.grid.major.x = element_line(NULL),
                  panel.grid.minor = element_line(NULL),
                  legend.background = element_rect(fill = "white"),
                  legend.key = element_rect(fill = "white"),
                  legend.text = element_text(color = "black" , family = "sans") ,
                  legend.title = element_text(color = "black" , family = "sans") , 
                  text = element_text(size=12, face="plain", color = "white" , family = "sans"),
                  axis.title = element_text(color = "white" , family = "sans"),
                  axis.text = element_text(color = "white" , family = "sans"))


# Partifärger
partifärger <- scale_colour_manual(values = c("Centerpartiet" = "#009933" ,
                                              "Feministiskt initiativ" = "#CD1B68" ,
                                              "Kristdemokraterna" = "#000077" ,
                                              "Liberalerna" = "#006AB3" ,
                                              "Miljöpartiet" = "#83CF39" ,
                                              "Moderaterna" = "#52BDEC" ,
                                              "Piratpartiet" = "#572B85" ,
                                              "Socialdemokraterna" = "#E8112d" , 
                                              "Sverigedemokraterna" = "#DDDD00" ,
                                              "Vänsterpartiet" = "#DA291C" ,
                                              "Övriga partier" = "grey"))
