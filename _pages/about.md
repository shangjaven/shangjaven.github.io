---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

👋Hi there, I am Zhiwei Shang (尚致违), currently a research assistant at [Intelligent Transportation (INTR) Thrust](https://www.hkust-gz.edu.cn/academics/hubs-and-thrust-areas/systems-hub/intelligent-transportation/) in the [System Hub](https://www.hkust-gz.edu.cn/academics/hubs-and-thrust-areas/systems-hub/), [Hong Kong University of Science and Technology (Guangzhou campus)](https://www.hkust-gz.edu.cn/), supervised by [Prof. Meixin Zhu](https://scholar.google.com.hk/citations?user=5Ysgg7AAAAAJ).

Before this, I received Master of Electronic and Information Engineering in Computer Technology from [University of Chinese Academy of Sciences](https://english.ucas.ac.cn/) in 2023, supervised by [Prof. Yunduan Cui](https://cuiyunduan.vercel.app/). I received Bachelor of Engineering in Hydrology and Water Resources Engineering from [Sichuan University](https://en.scu.edu.cn/) in 2020.

My research interests lie in the engineering applications of artificial intelligence, especially reinforcement learning, and in particular in the development of robust and efficient control algorithms for autonomous vehicles and robots operating in complex environments.

<span class='anchor' id='edu'></span>

# 📖 Educations
- *2020.09 - 2023.06*, University of Chinese Academy of Sciences (UCAS), Master of Electronic and Information Engineering in Computer Technology.
- *2016.09 – 2020.06*, Sichuan University (SCU), Bachelor of Engineering in Hydrology and Water Resources Engineering.

<span class='anchor' id='exp'></span>

# 💼 Experiences
- *2023.08 - present*, Hong Kong University of Science and Technology (HKUST), Guangzhou Campus, Research Assistant.

<span class='anchor' id='news'></span>

# 🔥 News
- *2024.03*: &nbsp; 🎉🎉 One paper is accepted by the IEEE Intelligent Vehicles Symposium (*IV 2024*).
- *2024.03*: &nbsp; A manuscript submitted to *IROS 2024* 

<span class='anchor' id='pub'></span>

# 📝 Publications 
\* Co-first author, ✉️ Corresponding author.

### Working Papers
- `IROS 2024` Effective Reinforcement Learning Control using Conservative Soft Actor-Critic.  
<!--[[paper]](https://ieeexplore.ieee.org/document/10313993) -->
<!-- [[code]](https://github.com/AndrewZhou924)   -->
**Zhiwei Shang\***, Yunduan Cui\*, Wenjun Huang, Meixin Zhu✉️, Chenjia Bai, Di Chen, Xinyi Yuan.

### Published / Accepted Papers

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2019</div><img src='images/fs.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FastSpeech: Fast, Robust and Controllable Text to Speech](https://papers.nips.cc/paper/8580-fastspeech-fast-robust-and-controllable-text-to-speech.pdf) \\
**Yi Ren**, Yangjun Ruan, Xu Tan, Tao Qin, Sheng Zhao, Zhou Zhao, Tie-Yan Liu

[**Project**](https://speechresearch.github.io/fastspeech/) <strong><span class='show_paper_citations' data='4FA6C0AAAAAJ:qjMakFHDy7sC'></span></strong>

- FastSpeech is the first fully parallel end-to-end speech synthesis model.
- **Academic Impact**: This work is included by many famous speech synthesis open-source projects, such as [ESPNet ![](https://img.shields.io/github/stars/espnet/espnet?style=social)](https://github.com/espnet/espnet). Our work are promoted by more than 20 media and forums, such as [机器之心](https://mp.weixin.qq.com/s/UkFadiUBy-Ymn-zhJ95JcQ)、[InfoQ](https://www.infoq.cn/article/tvy7hnin8bjvlm6g0myu).
- **Industry Impact**: FastSpeech has been deployed in [Microsoft Azure TTS service](https://techcommunity.microsoft.com/t5/azure-ai/neural-text-to-speech-extends-support-to-15-more-languages-with/ba-p/1505911) and supports 49 more languages with state-of-the-art AI quality. It was also shown as a text-to-speech system acceleration example in [NVIDIA GTC2020](https://resources.nvidia.com/events/GTC2020s21420).
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2021</div><img src='images/fs2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FastSpeech 2: Fast and High-Quality End-to-End Text to Speech](https://arxiv.org/abs/2006.04558) \\
**Yi Ren**, Chenxu Hu, Xu Tan, Tao Qin, Sheng Zhao, Zhou Zhao, Tie-Yan Liu

[**Project**](https://speechresearch.github.io/fastspeech2/) <strong><span class='show_paper_citations' data='4FA6C0AAAAAJ:LkGwnXOMwfcC'></span></strong>
  - This work is included by many famous speech synthesis open-source projects, such as [PaddlePaddle/Parakeet ![](https://img.shields.io/github/stars/PaddlePaddle/PaddleSpeech?style=social)](https://github.com/PaddlePaddle/PaddleSpeech), [ESPNet ![](https://img.shields.io/github/stars/espnet/espnet?style=social)](https://github.com/espnet/espnet) and [fairseq ![](https://img.shields.io/github/stars/pytorch/fairseq?style=social)](https://github.com/pytorch/fairseq).
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024</div><img src='images/mega.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Mega-TTS 2: Boosting Prompting Mechanisms for Zero-Shot Speech Synthesis](https://openreview.net/forum?id=mvMI3N4AvD) \\ 
Ziyue Jiang, Jinglin Liu, **Yi Ren**, et al.

[**Project**](https://boostprompt.github.io/boostprompt/) 
  - This work has been deployed on many TikTok products.
  - Advandced zero-shot voice cloning model.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2022</div><img src='images/diffsinger.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[DiffSinger: Singing Voice Synthesis via Shallow Diffusion Mechanism](https://arxiv.org/abs/2105.02446) \\
Jinglin Liu, Chengxi Li, **Yi Ren**, Feiyang Chen, Zhou Zhao

- Many [video demos](https://www.bilibili.com/video/BV1be411N7JA) created by the [DiffSinger community](https://github.com/openvpi) are released.
- DiffSinger was introduced in [a very popular video](https://www.bilibili.com/video/BV1uM411t7ZJ) (1600k+ views) on Bilibili!

- [**Project**](https://diffsinger.github.io/) \| [![](https://img.shields.io/github/stars/NATSpeech/NATSpeech?style=social&label=DiffSpeech Stars)](https://github.com/NATSpeech/NATSpeech) \| [![](https://img.shields.io/github/stars/MoonInTheRiver/DiffSinger?style=social&label=DiffSinger Stars)](https://github.com/MoonInTheRiver/DiffSinger) \| [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Demo)](https://huggingface.co/spaces/NATSpeech/DiffSpeech)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2021</div><img src='images/portaspeech.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PortaSpeech: Portable and High-Quality Generative Text-to-Speech](https://arxiv.org/abs/2109.15166) \\
**Yi Ren**, Jinglin Liu, Zhou Zhao

[**Project**](https://portaspeech.github.io/) \| [![](https://img.shields.io/github/stars/NATSpeech/NATSpeech?style=social&label=Code+Stars)](https://github.com/NATSpeech/NATSpeech) \| [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Demo)](https://huggingface.co/spaces/NATSpeech/PortaSpeech)
</div>
</div>

- `AAAI 2024` [Emotion Rendering for Conversational Speech Synthesis with Heterogeneous Graph-Based Context Modeling](https://arxiv.org/abs/2312.11947), Rui Liu, Yifan Hu, **Yi Ren**, et al. [![](https://img.shields.io/github/stars/walker-hyf/ECSS?style=social&label=Code+Stars)](https://github.com/walker-hyf/ECSS)


- <span class="badge badge-primary">``IV 2024``</span> Learning Realistic and Reactive Traffic Agents.  
<!--[[paper]](https://ieeexplore.ieee.org/document/10313993) -->
<!-- [[code]](https://github.com/AndrewZhou924)   -->
Meixin Zhu✉️, Di Chen, Xinyi Yuan, **Zhiwei Shang**, Chenxi Liu.

- ``IEEE TNNLS`` Relative Entropy Regularized Sample-Efficient Reinforcement Learning With Continuous Actions.  
[[paper]](https://ieeexplore.ieee.org/document/10313993)
<!-- [[code]](https://github.com/AndrewZhou924)   -->
**Zhiwei Shang**, Renxing Li, Chunhua Zheng, Huiyun Li, Yunduan Cui✉️.

- ``Applied Intelligence`` Efficient distributional reinforcement learning with Kullback-Leibler divergence regularization.  
[[paper]](https://link.springer.com/article/10.1007/s10489-023-04867-z)
<!-- [[code]](https://github.com/AndrewZhou924)   -->
Li Renxing, **Zhiwei Shang**, Chunhua Zheng, Huiyun Li, Qing Liang, Yunduan Cui✉️.

- ``PRAI 2022`` Dynamic Policy Programming with Descending Regularization for Efficient Reinforcement Learning Control.  
[[paper]](https://ieeexplore.ieee.org/abstract/document/9904283)
<!-- [[code]](https://github.com/AndrewZhou924)   -->
Renxing Li, **Zhiwei Shang**, Chunhua Zheng, Huiyun Li, Qing Liang, Yunduan Cui✉️.

- ``ROBIO 2021`` Shiftable Dynamic Policy Programming for Efficient and Robust Reinforcement Learning Control.  
[[paper]](https://ieeexplore.ieee.org/document/9739232)
<!-- [[code]](https://github.com/AndrewZhou924)   -->
Zhiwei Shang, Huiyun Li, Yunduan Cui✉️.

<span class='anchor' id='awards'></span>

# 🎖 Awards
- *2022.12*, Outstanding Graduate Student Award of Dean's Innovation Award of Shenzhen Institute of Advanced Integration Technology, Chinese Academy of Sciences and The Chinese University of Hong Kong (There are only **17 people** in the whole institute).
- *2019.05* Outstanding Project of **Provincial** Student Innovation and Entrepreneurship Training Program (**Top 10%**)

<span class='anchor' id='talks'></span>

# 💬 Talks
- *2024.04*, Guest Lecture of Reinforcement Learning, Hong Kong University of Science and Technology, Guangzhou Campus. 

<span class='anchor' id='services'></span>

# 💻 Services
<!-- - Conference Reviewer for ICML, NeurIPS, ICLR, AISTATS, ACML, AAAI, IJCAI, CIKM, SIGKDD. -->
### Journal Reviewer 
- IEEE Transactions on Intelligent Vehicles (T-IV)