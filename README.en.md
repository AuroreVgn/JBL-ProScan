# 🐠 JBL ProScan

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2026.3%2B-41BDF5.svg?style=flat-square&logo=homeassistant)](https://www.home-assistant.io/)
[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=flat-square)](https://hacs.xyz/)
[![Maintainer](https://img.shields.io/badge/Maintainer-AuroreVgn-blue.svg?style=flat-square)](https://github.com/AuroreVgn)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Soutenir-FF5E5B?logo=kofi&logoColor=white&style=flat-square)](https://ko-fi.com/aurorevgn)

## 🏠 My Home Assistant Projects

Discover all my Home Assistant integrations and projects on my dedicated page: [**🏠 Discover my Home Assistant Projects**](https://erra.me)


## ☕ Support the project

If you find this integration useful and would like to support its development and maintenance:

<p>
  <a href="https://ko-fi.com/aurorevgn">
    <img src="https://storage.ko-fi.com/cdn/kofi4.png?v=3"
         alt="Support me on Ko-fi"
         height="45">
  </a>
</p>

## 🌍 Other languages

[Français](README.md)

## 📑 Table of contents

- [⚠️ Important](#toc-section-1)
- [✨ Features](#toc-section-2)
- [📸 Screenshots](#toc-section-3)
- [📦 Installation](#toc-section-4)
- [⚙️ Configuration](#toc-section-5)
- [📊 Sensors](#toc-section-6)
- [📊 Created entities](#toc-section-7)
- [🧩 Companion Lovelace Card](#toc-section-8)
- [🙏 Credits](#toc-section-9)
- [📄 License](#toc-section-10)

<a name="toc-section-1"></a>

## ⚠️ Important

A Home Assistant custom integration for **JBL ProScan** allowing you to retrieve your **pond** or **aquarium** water analyses directly from your **myJBL** account.

<a name="toc-section-2"></a>

## ✨ Features

- 🔐 Secure authentication to **myJBL**
- 🌊 Automatic pond / aquarium selection
- 📊 Complete analysis history
- 🔄 Manual refresh service
- 📈 Long-Term Statistics compatible
- 🤖 Binary sensors for automations
- 🌍 Multi-language support
- ⚡ Native Home Assistant Config Flow

<a name="toc-section-3"></a>

## 📸 Screenshots

### Setup
<img width="450" src="https://github.com/user-attachments/assets/09e357ca-72af-489c-bd66-f16c78006d31"/>

### Entities
<img width="250" alt="image" src="https://github.com/user-attachments/assets/04da4e02-f774-4e2f-98c3-c452e3ff5f17" />

<a name="toc-section-4"></a>

## 📦 Installation

> [!NOTE]
> **Marketplace / HACS — Home Assistant 2026.11+:** Open **Settings → Marketplace**, built into Home Assistant without a separate HACS installation. Search for this project or add `https://github.com/AuroreVgn/JBL-ProScan` as a **custom repository** if it is not yet listed. On **Home Assistant 2026.10 and earlier**, continue using HACS as described below. Existing `hacs_repository` links remain compatible. After installing, configure the integration under Settings → Devices & services. This remains an unofficial community project.

### HACS (recommended)
#### Add the repository

Automatically
[![Open your Home Assistant instance and open this repository inside HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=AuroreVgn&repository=JBL_ProScan&category=integration)

Or manually

```
HACS
 └── Integrations
      └── ⋮
           └── Custom repositories

Repository:
https://github.com/AuroreVgn/JBL_ProScan

Category:
Integration
```

#### Install
```
HACS
 └── JBL ProScan
      └── Download
```

Restart Home Assistant.

<a name="toc-section-5"></a>

## ⚙️ Configuration
Go to

```
Settings
→ Devices & Services
→ Add Integration
→ JBL ProScan
```

Enter
- myJBL email
- myJBL password

Then simply choose the pond (or aquarium) to import.

<a name="toc-section-6"></a>

## 📊 Sensors
### Water parameters
- pH
- KH
- GH
- NO₂
- NO₃
- CO₂
- Chlorine

### Additional sensors
- History
- Last analysis
- Days since last analysis

### Binary sensors
- pH OK
- KH OK
- GH OK
- Nitrite High
- Nitrate High
- Chlorine High
- Analysis overdue

<a name="toc-section-7"></a>

## 📊 Created entities
### Sensors

| Entity | Unit |
|---------|------|
| pH | — |
| KH | °dKH |
| GH | °dGH |
| NO₂ | mg/L |
| NO₃ | mg/L |
| CO₂ | mg/L |
| Chlorine | mg/L |
| History | analyses |
| Last analysis | Date |
| Days since last analysis | day |

All measurement sensors are compatible with **Home Assistant Long-Term Statistics**.

### Binary sensors
The integration also creates binary sensors designed for automations.
- pH OK
- KH OK
- GH OK
- Nitrite High
- Nitrate High
- Chlorine High
- Analysis overdue

### Services

The integration provides the following service:

#### Refresh data

```
jbl_proscan.refresh
```

Refreshes the selected pond immediately without waiting for the next scheduled update.

Perfect for dashboards and automations.

### Automations
Thanks to the binary sensors you can easily create automations such as:
- Remind you when no analysis has been performed for X days.


### Dashboard
➡️ https://github.com/AuroreVgn/JBL_ProScan_card


<a name="toc-section-8"></a>

## 🧩 Companion Lovelace Card
A dedicated Lovelace card is available ➡️ https://github.com/AuroreVgn/JBL_ProScan_card

Features include:
- 📈 Interactive graphs
- 🎨 Custom colors
- 🎭 Custom icons
- 🌍 Multi-language
- 🔄 Manual refresh
- 📅 Period selector
- 📊 Previous analysis comparison
- 📉 Recommended JBL ranges
- 🖱 Interactive tooltips
- 🧩 Visual editor


<a name="toc-section-9"></a>

## 🙏 Credits
Developed by **AuroreVgn**
Special thanks to the Home Assistant community.
This project is **not affiliated with JBL GmbH & Co. KG**.


<a name="toc-section-10"></a>

## 📄 License
Distributed under the MIT License.


[releases-shield]: https://img.shields.io/github/v/release/AuroreVgn/JBL_ProScan?style=flat-square
[releases]: https://github.com/AuroreVgn/JBL_ProScan/releases
[license-shield]: https://img.shields.io/github/license/AuroreVgn/JBL_ProScan?style=flat-square
