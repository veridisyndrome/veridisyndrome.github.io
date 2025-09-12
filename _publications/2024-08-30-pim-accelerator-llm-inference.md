---
title: "PIM-based AI Accelerator and Software Stack for Efficient LLM Inference"
collection: publications
category: preprints
permalink: /publications/2024-08-30-pim-accelerator-llm-inference/
excerpt: "Technical report from my KAIST internship, exploring NeuPIMs and AttAcc architectures and evaluating PIM-based accelerators for efficient large language model inference."
date: 2024-08-30
venue: "Technical Report — KAIST Concurrency & Parallelism Lab"
paperurl: "/files/PIM_based_AI_accelerator_and_software_stack_for_efficient_LLM_inference.pdf"
citation: "Robin Guerrero, P. (2024). PIM-based AI Accelerator and Software Stack for Efficient LLM Inference. Technical Report, KAIST Concurrency & Parallelism Lab, Daejeon, South Korea."
---

This report summarizes the work I conducted during my internship at the **Concurrency & Parallelism Laboratory, KAIST**, under the supervision of Prof. Jeehoon Kang and Haechan An (Summer 2024)

Key highlights:
- Reviewed and compared state-of-the-art PIM architectures (NeuPIMs, AttAcc, SpecPIM, PIM-DL)
- Reproduced published experiments, identifying **multi-device scalability limits** in NeuPIMs
- Demonstrated that AttAcc improves throughput and energy efficiency for transformer attention layers
- Proposed new directions for compiler/runtime support and heterogeneous NPU+PIM integration

The report concludes that **PIM architectures can significantly reduce memory bottlenecks in LLM inference**, and outlines future research directions in compiler support, system scalability, and energy efficiency