---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Research Interests
======
* Neural Coding, Learning Dynamics, Cognition

Education
======
* B.Sc. in Computer Science, **EPFL** — Sept 2022 – July 2025  
  * Focus: Communication Systems and Machine Learning  
  * Coursework: Machine Learning, NLP, Algorithms, Data-intensive Systems, Internet Analytics, Software Construction, Computer Systems, Security & Privacy, Stochastic Models

Research Experience
======
* **Research Intern**, NICS Lab — Tsinghua University, Beijing, China  
  * July 2025 – Currently
  * Research topic: Model-Level Optimization for Efficient AI-Generated Content (AIGC) Inference (TBD)  
  * Supervisors: Prof. Yu Wang, Dr. Xuefei Ning, and Tianchen Zhao  

* **Research Intern**, Robust Scalable Systems Software Laboratory (RS3) — EPFL, Lausanne, Switzerland  
  * Jan 2025 – July 2025  
  * Research topic: Efficient Deployment of Vision-Language Models on Mobile Devices  
  * Supervisors: Prof. Sanidhya Kashyap and Yueyang Pan  
    * Benchmarked deployment frameworks (llama.cpp, MLC-Imp, mllm) on the **OnePlus 13R** with VLMs (LLaVA-1.5 7B, MobileVLM-3B, Imp-v1.5 3B), measuring **latency, throughput, and device thermals**.
    * Profiled inference workloads across **CPU, GPU, and NPU**, demonstrating **CPU saturation** and **accelerator underutilization** as the key barriers to real-time on-device generation.
    * Results published in the preprint Efficient Deployment of Vision-Language Models on Mobile Devices: A Case Study on OnePlus 13R (arXiv:2507.08505), providing practical **profiling tools** and **deployment guidelines** for future mobile AI systems.

* **Research Intern**, Concurrency & Parallelism Lab — KAIST, Daejeon, South Korea  
  * June 2024 – Aug 2024  
  * Research topic: PIM-based AI Accelerator and Software Stack for Efficient LLM Inference  
  * Supervisors: Prof. Jeehoon Kang and Haechan An  
    * Investigated NeuPIMs architecture, achieving up to **3.0x throughput improvement** over GPU systems and **1.6x improvement** over naive NPU+PIM systems on **GPT-3 (7B)**.
    * Evaluated AttAcc design, demonstrating **2.81x higher throughput** and **62.6% improved power efficiency** for **LLaMA 65B** compared to GPU-only systems.
    * Reproduced experiments on PIM-based systems, uncovering limitations in multi-device scalability and proposing solutions projected to enhance performance by **25%** in multi-device environments.


Awards
======
* **Tsinghua University Visiting Researcher Scholarship** (~USD 15,000)

Skills
======
* Programming: Python, C/C++, Java, Scala, Kotlin
* ML frameworks: PyTorch, TensorFlow, SGLang
* Other: Git, Docker, Linux, LaTeX
* Languages: English (Full professional proficiency), French (Native), Spanish (Native), Korean (Limited working proficiency)

Publications
======
<ul>
{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>

Service
======
* Contributor to open-source ML systems projects