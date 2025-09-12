---
title: "Efficient Deployment of Vision-Language Models on Mobile Devices: A Case Study on OnePlus 13R"
collection: publications
category: preprints
permalink: /publications/2025-07-14-efficient-deployment-vlm-on-mobile/
excerpt: "Comprehensive evaluation of deployment frameworks for large vision-language models (LLaVA-1.5 7B, MobileVLM-3B, Imp-v1.5 3B) on the OnePlus 13R, exposing CPU overuse, underutilized GPU/NPU, and key efficiency bottlenecks."
date: 2025-07-14
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/pdf/2507.08505'
bibtexurl: 'https://arxiv.org/bib/2507.08505'
citation: 'Robin Guerrero, P. , Pan, Y., & Kashyap, S. (2025). "Efficient Deployment of Vision-Language Models on Mobile Devices: A Case Study on OnePlus 13R." arXiv preprint arXiv:2507.08505'
---

We present a comprehensive evaluation of deployment frameworks—llama.cpp, MLC-Imp, and mllm—running vision-language models (LLaVA-1.5 7B, MobileVLM-3B, Imp-v1.5 3B) on the OnePlus 13R. In-depth measurements include CPU, GPU, and NPU utilization, temperature, inference latency, power consumption, and user experience. Benchmarking reveals CPU overutilization during token generation and underutilized GPU/NPU, highlighting major performance and responsiveness bottlenecks. We additionally provide practical profiling tools and framework-level insights to guide efficient model deployment on mobile devices.