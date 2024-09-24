---
title: 'Weenix (C)'
description: I implemented a fully functional operating system that implements threads, processes, device drivers, a file system, and virtual memory.
publishDate: 'Sept 16 2024'
---

Over the semester I implemented the Weenix operating system in CSCI1690 Operating Systems.

As part of this, I implemented in C:

- Threads, processes, and synchronization primitives
- Device drivers for terminals, disks, and memory devices
- Virtual File System - A common interface between the operating system kernel and various file systems
- S5FS - A file system based on the  Unix file system
- Virtual Memory - User address space management, running user-level code, servicing system calls. This includes virtual memory maps, handling page faults, memory management via anonymous objects and shadow objects, and system calls.
