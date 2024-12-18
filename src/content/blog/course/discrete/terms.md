---
title: 《离散数学》术语、符号、定律表
category: technique
draft: true
tags:
  - Riscv
summary: 关于哈工大（深圳）《离散数学》课程的术语、符号解释
description: 关于哈工大（深圳）《离散数学》课程的个人学习笔记。
---

《离散数学》课程中符号繁多、术语晦涩，这里整理了一些常用的符号、概念定律，做个人复习使用，仅供参考，欢迎补充。

“解释”仅作为辅助记忆的个人理解，并非严格的数学定义，具体请参考ppt和教材。

## 目录

## 集合

|           符号           | 含义       | 解释               |
| :----------------------: | ---------- | :----------------- |
|          $$A$$           | 集合       |                    |
|  $$ "card"(A), abs(A)$$  | 集合的基数 | 集合中元素的个数   |
|         $$P(A)$$         | 幂集       | 所有子集构成的集合 |
|       $$A sect B$$       | 交         |                    |
|      $$A union B$$       | 并         |                    |
|       $$A xor B$$        | 对称差     |                    |
| $$tilde.op A, dash(A) $$ | 补集       |                    |
|     $$ sect.big A $$     | 广义交     | A子集的交集        |
|    $$ union.big A $$     | 广义并     | A子集的并集        |

## 二元关系

|                 符号                  | 含义             | 解释                                                                             |
| :-----------------------------------: | ---------------- | :------------------------------------------------------------------------------- |
|        $$angle.l x,y angle.r$$        | 有序对/序偶      |                                                                                  |
|                 $$R$$                 | 关系             | $${angle.l x,y angle.r divides x in A, y in B}$$                                 |
|             $$A times B$$             | 笛卡尔积         | $${angle.l x,y angle.r}$$                                                        |
| $$A_1 times A_2 times ... times A_n$$ | 笛卡尔积         | $${angle.l x_1,x_2,...,x_n angle.r}$$                                            |
|             $$ phi.alt $$             | 空关系           |                                                                                  |
|            $$ A times B $$            | 全域关系         |                                                                                  |
|               $$ I_A $$               | 恒等关系         | $$ {angle.l x,x angle.r divides x in A}$$                                        |
|             $$ "Dom" R $$             | 定义域           | $${x}$$                                                                          |
|             $$ "Ran" R $$             | 值域             | $${y}$$                                                                          |
|             $$ "Fld" R $$             | 域               | $$ "Dom"R union "Ran" R$$                                                        |
|             $$ R^(-1) $$              | 逆               | $$ {angle.l y,x angle.r} $$                                                      |
|           $$ R compose S $$           | 复合             | $$ {angle.l x,y angle.r} compose {angle.l y,z angle.r} = {angle.l x,z angle.r}$$ |
|               $$ R^n $$               | 复合             | $R$和自己复合$n$次                                                               |
|           $$ R divides A $$           | $R$在$A$上的限制 | $R$中以$A$为定义域的关系                                                         |
|              $$ R[A] $$               | $A$在$R$下的像   | $"Ran"(R divides A)$; 定义域$A$对应的值域                                        |
|         $$ I_A subset.eq R $$         | 自反性           | 包含恒等关系                                                                     |
|     $$ R union I_A = diameter $$      | 反自反性         | 不包含$angle.l x,x angle.r$                                                      |
|           $$ R = R^(-1) $$            | 对称性           |                                                                                  |
|   $$ R sect R^(-1) subset.eq I_A$$    | 反对称性         | 有$angle.l x,y angle.r$则无$angle.l y,x angle.r$                                 |
|           $$ R = R^(-1) $$            | 对称性           |                                                                                  |
|   $$ R sect R^(-1) subset.eq I_A$$    | 反对称性         | 有$angle.l x,y angle.r$则无$angle.l y,x angle.r$ (并非不对称)                    |
|     $$ R compose R subset.eq R $$     | 传递性           |                                                                                  |

> [!tip]
> 不自反$$eq.not$$反自反
>
> 不对称$$eq.not$$反对称

## 第十八章： 支配集、覆盖集、独立集和匹配

|    符号     | 含义   |
| :---------: | ------ |
| $$gamma_0$$ | 支配数 |
| $$alpha_0$$ | 支配数 |
| $$beta_0$$  | 支配数 |
| $$alpha_1$$ | 支配数 |
| $$beta_1$$  | 支配数 |
