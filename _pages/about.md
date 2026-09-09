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

👋 Hi there! I am Zhiwei Shang, currently a **second-year** Computer Science Ph.D. student in the [School of Data Science](https://sds.cuhk.edu.cn/en) at [The Chinese University of Hong Kong, Shenzhen](https://www.cuhk.edu.cn/en), supervised by [Prof. Zhongxiang Dai](https://daizhongxiang.github.io/). I also work as an LLM Agent Researcher at [DeepWisdom](https://atoms.dev/metagpt).

Previously, I was a research assistant worked with [Prof. Meixin Zhu](https://meixinzhu.github.io/) at [The Hong Kong University of Science and Technology (Guangzhou)](https://www.hkust-gz.edu.cn/) and [Dr. Chenjia Bai](https://baichenjia.github.io/) at the [Shanghai Artificial Intelligence Laboratory](https://www.shlab.org.cn/). I received my M.E. in Computer Technology from the [University of Chinese Academy of Sciences](https://english.ucas.ac.cn/) in 2023, advised by [Prof. Yunduan Cui](https://cuiyunduan.vercel.app/), and my B.E. in Hydrology and Water Resources Engineering from [Sichuan University](https://en.scu.edu.cn/) in 2020.

My current research interests mainly lie in Large Language Models (LLMs), LLM-based Agents and Reinforcement Learning (RL). I believe that the development of Artificial Intelligence can help us build a better, safer and more equal society！You’re more than welcome to write me an email to connect (or make friends)! Let’s explore the exciting world together! 🌌

<span class='anchor' id='edu'></span>

# 📖 Education
- *Sep. 2025 - present*<br />
Ph.D. student in Computer Science<br />
**The Chinese University of Hong Kong, Shenzhen (CUHK-Shenzhen)**<br />
Advisor: [Prof. Zhongxiang Dai](https://daizhongxiang.github.io/)<br />
Research: Large language models and reinforcement learning

- *Sep. 2020 - Jun. 2023*<br />
M.E. in Computer Technology<br />
**University of Chinese Academy of Sciences (UCAS)**<br />
Advisor: [Prof. Yunduan Cui](https://cuiyunduan.vercel.app/)<br />
Research: Reinforcement learning theory and applications<br />
Thesis: *Reinforcement Learning Control Methods Based on Relative Entropy Regularization*

- *Sep. 2016 - Jun. 2020*<br />
B.E. in Hydrology and Water Resources Engineering<br />
**Sichuan University (SCU)**<br />
Thesis: *Deep Learning-Based Runoff Prediction in the Upper Minjiang River Basin*

<span class='anchor' id='exp'></span>

# 💼 Research Experience
- *2026.07 - present*, LLM Agent Researcher @[DeepWisdom](https://atoms.dev/metagpt), advised by [Chenglin Wu](https://scholar.google.com/citations?user=nYIj020AAAAJ&hl=zh-CN).

- *2023.08 - 2025.06*, Research Assistant @[Hong Kong University of Science and Technology (Guangzhou)](https://www.hkust-gz.edu.cn/), advised by [Prof. Meixin Zhu](https://meixinzhu.github.io/).

- *2024.02 - 2024.09*, Research Assistant @[Shanghai Artificial Intelligence Laboratory](https://www.shlab.org.cn/), advised by [Dr. Chenjia Bai](https://baichenjia.github.io/).

- *2020.09 - 2023.06*, Core Member & Research Assistant @[Shenzhen Institute of Advanced Technology](https://english.siat.ac.cn/), advised by [Prof. Yunduan Cui](https://cuiyunduan.vercel.app/).

<span class='anchor' id='news'></span>

# 🔥 News

<div class="news-scroll" role="region" aria-label="News" tabindex="0" markdown="1">

- *2026.07*: &nbsp; I joined **DeepWisdom** as an LLM Agent Researcher.
- *2026.06*: &nbsp; 🎉 Three papers were accepted to **ICML 2026 workshops**.
- *2026.05*: &nbsp; 🎉 Received the **ICML 2026 Silver Reviewer Award**.
- *2026.04*: &nbsp; 🎉 Three papers were accepted to **ICML 2026**, including one <span style="color:red">**Spotlight (Top 2.2%)**</span>.
- *2025.09*: &nbsp; 👨‍🎓 I was admitted to the Ph.D. program at the School of Data Science, The Chinese University of Hong Kong, Shenzhen.
- *2025.06*: &nbsp; 🎉 Our paper was accepted to **IROS 2025**.
- *2025.05*: &nbsp; 🎉 Our paper was accepted by **IEEE Transactions on Intelligent Transportation Systems (TITS)**.
- *2024.03*: &nbsp; 🎉 Our paper was accepted to **IV 2024**.

</div>

<span class='anchor' id='pub'></span>

# 📝 Publications & Patents
\* Co-first author, ✉️ Corresponding author.

<div class="publications" id="publication-browser" markdown="1">
<div class="publication-tabs" role="tablist" aria-label="Publications and patents">
  <button type="button" id="tab-selected" role="tab" aria-selected="true" aria-controls="papers-selected" tabindex="0">Selected Papers</button>
  <span aria-hidden="true">|</span>
  <button type="button" id="tab-full" role="tab" aria-selected="false" aria-controls="papers-full" tabindex="-1">Full Papers List</button>
  <span aria-hidden="true">|</span>
  <button type="button" id="tab-patents" role="tab" aria-selected="false" aria-controls="papers-patents" tabindex="-1">Patents</button>
</div>

<div id="papers-selected" role="tabpanel" aria-labelledby="tab-selected" tabindex="0"></div>

<div id="papers-full" role="tabpanel" aria-labelledby="tab-full" tabindex="0" hidden markdown="1">
<div class="publication-group" markdown="1">

### Working Papers
- <strong class="first-author">Effective Reinforcement Learning Control using Conservative Soft Actor-Critic.</strong>  
**<u> Zhiwei Shang* </u>**, Xinyi Yuan\*, Wenjun Huang, Yunduan Cui, Di Chen, Meixin Zhu✉️.<br />
***<font color = "#224B8D">Preprint, 2025</font>***


- **FedPOB: Sample-Efficient Federated Prompt Optimization via Bandits.**  
Pingchen Lu, Zhi Hong, **<u> Zhiwei Shang </u>**, Zhiyong Wang, Yikun Ban, Yao Shu, Min Zhang, Shuang Qiu, Zhongxiang Dai✉️.<br />
***<font color = "#224B8D">Preprint, 2025</font>***


- **A Rugged Compass in Flatland: Curvature-Aware Rectification for Secure Test-Time Adaptation.**  
Mingrong Gong, Junhao Dong, **<u> Zhiwei Shang </u>**, Daizong Liu, Siheng Wang, Zhengtao Yao, Ting Peng, Sergio Escalera, Xinghua Qu, Yew-Soon Ong✉️.<br />
***<font color = "#224B8D">Preprint, 2026</font>***


- **VLM safety via geometry reference.**  
Mingrong Gong, Junhao Dong, Xuanhui Lin, **<u> Zhiwei Shang </u>**, Jiaming Zhang, Daizong Liu, Yikai Wang, Ting Peng, Sergio Escalera, Xinghua Qu, Yew-Soon Ong✉️.<br />
***<font color = "#224B8D">Preprint, 2026</font>***

</div>
<div class="publication-group" markdown="1">

### Published / Accepted Papers
- <strong class="first-author">Fusion is the New Mutation: Bandit-Guided Evolution on Workflow Graphs.</strong>  
**<u> Zhiwei Shang </u>**, Jiahang Sun, Mingrong Gong, Mingze Kong, Qu Zikun, Pingchen Lu, Junhao Dong, Zhipiao Liu, Hongwei Yang, Guoqing Xie, Yao Shu, Zhongxiang Dai✉️.<br />
***<font color = "#224B8D">ICML 2026 Workshop on Compositional Learning: Safety, Interpretability, and Agents.</font>***


- **CB-Orchestrator: Adaptive Workflow Optimization for LLM Agents via Contextual Bandits.**  
Jiahang Sun, **<u> Zhiwei Shang </u>**, Zhipiao Liu, Hongwei Yang, Guoqing Xie, Shuang Qiu, Zhongxiang Dai✉️.<br />
***<font color = "#224B8D">ICML 2026 Workshop on Compositional Learning: Safety, Interpretability, and Agents.</font>***


- **Workflow-R1: Group Sub-sequence Policy Optimization for Multi-turn Workflow Construction.**  
Mingze Kong, Zikun Qu, Zhongquan Zhou, Pengyu Liang, Xiang Li, **<u> Zhiwei Shang </u>**, Zhi Hong, Kaiyu Huang, Zhiyong Wang,
Zhongxiang Dai✉️.<br />
***<font color = "#224B8D">ICML 2026 Workshop on RL from World Feedback.</font>***


- **MASPOB: Bandit-Based Prompt Optimization for Multi-Agent Systems with Graph Neural Networks.**  
Zhi Hong\*, Qian Zhang\*, Jiahang Sun, **<u>Zhiwei Shang</u>**, Mingze Kong, Xiangyi Wang, Yao Shu, Zhongxiang Dai✉️.<br />
***<font color = "#224B8D">ICML 2026</font> <font color = "red">(Spotlight, Top 2.2%)</font>***


- **T-POP: Test-Time Personalization with Online Preference Feedback.**  
Qu Zikun, Min Zhang, Mingze Kong, Xiang Li, **<u>Zhiwei Shang</u>**, Zhiyong Wang, Yikun Ban, Shuang Qiu, Yao Shu, Zhongxiang Dai✉️.<br />
***<font color = "#224B8D">ICML 2026</font>***


- **Social Hippocampus Memory Learning.**  
Liping Yi, Zhiming Zhao, Kewen Zhu, Xiang Li, **<u>Zhiwei Shang</u>**, Qinghua Hu✉️.<br />
***<font color = "#224B8D">ICML 2026</font>***


- <strong class="first-author">Preference Aligned Diffusion Planner for Quadrupedal Locomotion Control.</strong>  
Xinyi Yuan\*, **<u> Zhiwei Shang* </u>**, Zifan Wang, Chenkai Wang, Zhao Shan, Meixin Zhu✉️, Chenjia Bai✉️, Weiwei Wan, Kensuke Harada, Xuelong Li.<br />
***<font color = "#224B8D">IROS 2025, Oral Presentation</font>*** \| [[Website](https://shangjaven.github.io/preference-aligned-diffusion-legged/)]


- **Dynamic High-Order Control Barrier Functions with Diffuser for Safety-Critical Trajectory Planning at Signal-Free Intersections.**  
Di Chen, Ruiguo Zhong, Kehua Chen, **<u>Zhiwei Shang</u>**, Meixin Zhu✉️, Edward Chung.<br />
***<font color = "#224B8D">IEEE Transactions on Intelligent Transportation Systems(TITS), 2025</font>***


- **Learning Realistic and Reactive Traffic Agents.**  
Meixin Zhu✉️, Di Chen, Xinyi Yuan, **<u>Zhiwei Shang</u>**, Chenxi Liu.<br />
***<font color = "#224B8D">IV 2024</font>***


- <strong class="first-author">Relative Entropy Regularized Sample-Efficient Reinforcement Learning with Continuous Actions.</strong>  
**<u>Zhiwei Shang</u>**, Renxing Li, Chunhua Zheng, Huiyun Li, Yunduan Cui✉️.<br />
***<font color = "#224B8D">IEEE Transactions on Neural Networks and Learning Systems(TNNLS), 2023</font>***


- **Efficient distributional reinforcement learning with Kullback-Leibler divergence regularization.**  
Renxing Li, **<u>Zhiwei Shang</u>**, Chunhua Zheng, Huiyun Li, Qing Liang, Yunduan Cui✉️.<br />
***<font color = "#224B8D">Applied Intelligence, 2023</font>***


- **Dynamic Policy Programming with Descending Regularization for Efficient Reinforcement Learning Control.**  
Renxing Li, **<u>Zhiwei Shang</u>**, Chunhua Zheng, Huiyun Li, Qing Liang, Yunduan Cui✉️.<br />
***<font color = "#224B8D">PRAI 2022</font>***


- <strong class="first-author">Shiftable Dynamic Policy Programming for Efficient and Robust Reinforcement Learning Control.</strong>  
**<u>Zhiwei Shang</u>**, Huiyun Li, Yunduan Cui✉️.<br />
***<font color = "#224B8D">ROBIO 2021</font>***

</div>
</div>

<div id="papers-patents" role="tabpanel" aria-labelledby="tab-patents" tabindex="0" hidden markdown="1">

### Patents
- **<u> Zhiwei Shang </u>**, Yunduan Cui, Zhengkun Yi, Xiang Xie, Huiyun Li. **AC framework based on relative entropy regularization and its application to control robotic arms.** Chinese invention patent application, publication no. **CN116128017A**.

</div>
</div>

<span class='anchor' id='awards'></span>

# 🎖 Awards
- *May 2026*, **ICML 2026 Silver Reviewer Award**.
- *Dec. 2022*, **Director's Innovation Award (Outstanding Graduate Student Award)**, Shenzhen Institute of Advanced Integration Technology, Chinese Academy of Sciences and The Chinese University of Hong Kong (**17 recipients** across the institute).
- *May 2019*, **Outstanding Project Award**, Sichuan Provincial College Student Innovation and Entrepreneurship Program (**Top 10%**).

<span class='anchor' id='talks'></span>

# 💬 Talks
- *Apr. 2024*, **Guest Lecture on Reinforcement Learning**, The Hong Kong University of Science and Technology (Guangzhou).

<span class='anchor' id='services'></span>

# 💻 Services
- **Program Committee Member:** ICML 2026 Workshop on From Frames to Stories (F2S)
- **Conference Reviewer:** ICML, NeurIPS, ICLR, AAAI, EMNLP, ICRA, IROS
- **Journal Reviewer:** IEEE Transactions on Intelligent Vehicles (TIV), Applied Intelligence
- **Teaching Assistant**, School of Data Science, The Chinese University of Hong Kong, Shenzhen:
  - **CSC3100** Data Structures (*Summer 2026*)
  - **DDA 2001** Introduction to Data Science (*Spring 2026*)
  - **CSC 4303** Network Programming (*Spring 2026*)
