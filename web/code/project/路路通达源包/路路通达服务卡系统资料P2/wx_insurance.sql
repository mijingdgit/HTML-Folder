/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : wanxiit_lulutong

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2019-10-29 17:25:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for wx_insurance
-- ----------------------------
DROP TABLE IF EXISTS `wx_insurance`;
CREATE TABLE `wx_insurance` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `cid` int(11) unsigned NOT NULL COMMENT '卡ID',
  `kid` int(11) DEFAULT '0' COMMENT '卡种',
  `number` varchar(255) DEFAULT NULL COMMENT '卡号',
  `name_tb` varchar(255) DEFAULT NULL COMMENT '投保人姓名',
  `card_type_tb` tinyint(1) unsigned DEFAULT NULL COMMENT '投保人卡类型:1=身份证，2=护照',
  `number_tb` varchar(20) DEFAULT NULL COMMENT '投保人证件号',
  `relaship_bb` varchar(50) DEFAULT NULL COMMENT '被保人与投保人的关系',
  `mobile_tb` varchar(20) DEFAULT NULL COMMENT '投保人手机号',
  `sex_tb` enum('1','2','3') DEFAULT '3' COMMENT '投保人性别:1=男性，2=女性，3=未知',
  `birthday_tb` date DEFAULT NULL COMMENT '投保人生日',
  `email_tb` varchar(25) DEFAULT NULL COMMENT '投保人邮箱',
  `address_tb` varchar(255) DEFAULT NULL COMMENT '投保人地址',
  `name_bb` varchar(255) DEFAULT NULL COMMENT '被保人姓名',
  `card_type_bb` tinyint(1) unsigned DEFAULT NULL COMMENT '被保人卡类型:1=身份证，2=护照',
  `number_bb` varchar(255) DEFAULT NULL COMMENT '被保人证件号',
  `mobile_bb` varchar(20) DEFAULT NULL COMMENT '被保人手机号',
  `sex_bb` enum('1','2','3') DEFAULT '3' COMMENT '被保人性别:1=男性，2=女性，3=未知',
  `birthday_bb` date DEFAULT NULL COMMENT '被保人生日',
  `email_bb` varchar(25) DEFAULT NULL COMMENT '被保人邮箱',
  `address_bb` varchar(255) DEFAULT NULL COMMENT '被保人地址',
  `name_sy` varchar(255) DEFAULT NULL COMMENT '受益人姓名',
  `card_type_sy` tinyint(1) unsigned DEFAULT NULL COMMENT '受益人卡类型:1=身份证，2=护照',
  `number_sy` varchar(255) DEFAULT NULL COMMENT '受益人证件号',
  `relaship_sy` varchar(50) DEFAULT NULL COMMENT '受益人与投保人的关系',
  `mobile_sy` varchar(20) DEFAULT NULL COMMENT '受益人手机号',
  `sex_sy` enum('1','2','3') DEFAULT '3' COMMENT '受益人性别:1=男性，2=女性，3=未知',
  `birthday_sy` date DEFAULT NULL COMMENT '受益人生日',
  `email_sy` varchar(25) DEFAULT NULL COMMENT '受益人邮箱',
  `address_sy` varchar(255) DEFAULT NULL COMMENT '受益人地址',
  `status` enum('1','2') DEFAULT '1' COMMENT '状态:1=正常，2=已删除',
  `content` text COMMENT '协议',
  `effecttime` int(11) NOT NULL DEFAULT '0' COMMENT '生效时间',
  `createtime` int(11) NOT NULL DEFAULT '0' COMMENT '激活时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cid_UNIQUE` (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=19587 DEFAULT CHARSET=utf8 COMMENT='保险表';
