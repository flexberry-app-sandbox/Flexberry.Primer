﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Primer
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Вид обращения.
    /// </summary>
    //  *** Start programmer edit section *** (ВидОбращения CustomAttributes)

    //  *** End programmer edit section *** (ВидОбращения CustomAttributes)
    [AutoAltered()]
    [Caption("Вид обращения")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ВидОбращенияE", new string[] {
            "Название as \'Название\'",
            "Код as \'Код\'",
            "ТипОбращения as \'Тип обращения\'",
            "ТипОбращения.Название as \'Название\'"}, Hidden=new string[] {
            "ТипОбращения.Название"})]
    [MasterViewDefineAttribute("ВидОбращенияE", "ТипОбращения", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    [View("ВидОбращенияL", new string[] {
            "Название as \'Название\'",
            "Код as \'Код\'",
            "ТипОбращения.Название as \'Название\'"})]
    public class ВидОбращения : IIS.Primer.Справочник
    {
        
        private string fНазвание;
        
        private int fКод;
        
        private IIS.Primer.ТипОбращения fТипОбращения;
        
        //  *** Start programmer edit section *** (ВидОбращения CustomMembers)

        //  *** End programmer edit section *** (ВидОбращения CustomMembers)

        
        /// <summary>
        /// Название.
        /// </summary>
        //  *** Start programmer edit section *** (ВидОбращения.Название CustomAttributes)

        //  *** End programmer edit section *** (ВидОбращения.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                //  *** Start programmer edit section *** (ВидОбращения.Название Get start)

                //  *** End programmer edit section *** (ВидОбращения.Название Get start)
                string result = this.fНазвание;
                //  *** Start programmer edit section *** (ВидОбращения.Название Get end)

                //  *** End programmer edit section *** (ВидОбращения.Название Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (ВидОбращения.Название Set start)

                //  *** End programmer edit section *** (ВидОбращения.Название Set start)
                this.fНазвание = value;
                //  *** Start programmer edit section *** (ВидОбращения.Название Set end)

                //  *** End programmer edit section *** (ВидОбращения.Название Set end)
            }
        }
        
        /// <summary>
        /// Код.
        /// </summary>
        //  *** Start programmer edit section *** (ВидОбращения.Код CustomAttributes)

        //  *** End programmer edit section *** (ВидОбращения.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                //  *** Start programmer edit section *** (ВидОбращения.Код Get start)

                //  *** End programmer edit section *** (ВидОбращения.Код Get start)
                int result = this.fКод;
                //  *** Start programmer edit section *** (ВидОбращения.Код Get end)

                //  *** End programmer edit section *** (ВидОбращения.Код Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (ВидОбращения.Код Set start)

                //  *** End programmer edit section *** (ВидОбращения.Код Set start)
                this.fКод = value;
                //  *** Start programmer edit section *** (ВидОбращения.Код Set end)

                //  *** End programmer edit section *** (ВидОбращения.Код Set end)
            }
        }
        
        /// <summary>
        /// Вид обращения.
        /// </summary>
        //  *** Start programmer edit section *** (ВидОбращения.ТипОбращения CustomAttributes)

        //  *** End programmer edit section *** (ВидОбращения.ТипОбращения CustomAttributes)
        [NotNull()]
        public virtual IIS.Primer.ТипОбращения ТипОбращения
        {
            get
            {
                //  *** Start programmer edit section *** (ВидОбращения.ТипОбращения Get start)

                //  *** End programmer edit section *** (ВидОбращения.ТипОбращения Get start)
                IIS.Primer.ТипОбращения result = this.fТипОбращения;
                //  *** Start programmer edit section *** (ВидОбращения.ТипОбращения Get end)

                //  *** End programmer edit section *** (ВидОбращения.ТипОбращения Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (ВидОбращения.ТипОбращения Set start)

                //  *** End programmer edit section *** (ВидОбращения.ТипОбращения Set start)
                this.fТипОбращения = value;
                //  *** Start programmer edit section *** (ВидОбращения.ТипОбращения Set end)

                //  *** End programmer edit section *** (ВидОбращения.ТипОбращения Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ВидОбращенияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВидОбращенияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВидОбращенияE", typeof(IIS.Primer.ВидОбращения));
                }
            }
            
            /// <summary>
            /// "ВидОбращенияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВидОбращенияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВидОбращенияL", typeof(IIS.Primer.ВидОбращения));
                }
            }
        }
    }
}
